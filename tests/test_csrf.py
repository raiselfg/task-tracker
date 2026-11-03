from http.cookies import SimpleCookie

import httpx
import pytest
from fastapi import Response
from pydantic import ValidationError

from app.api.cookies import (
    clear_csrf_cookie,
    clear_session_cookie,
    set_csrf_cookie,
    set_session_cookie,
)
from app.core.security import create_csrf_token, new_token, verify_csrf_token
from tests.fakes import make_settings
from tests.test_api import application as application
from tests.test_api import auth_service as auth_service
from tests.test_api import settings as settings


@pytest.fixture
async def browser(application):
    async with httpx.AsyncClient(
        transport=httpx.ASGITransport(app=application), base_url="https://api.example.net"
    ) as client:
        yield client


async def test_csrf_bootstrap_is_uncached_and_does_not_create_a_session(browser, auth_service):
    first = await browser.get("/api/v1/auth/csrf")
    second = await browser.get("/api/v1/auth/csrf")
    assert first.status_code == 200
    assert first.headers["cache-control"] == "no-store"
    assert first.json() == second.json()
    assert browser.cookies.get("__Host-csrf")
    assert browser.cookies.get("__Host-session") is None
    auth_service.login.assert_not_awaited()
    auth_service.verify_session.assert_not_awaited()


@pytest.mark.parametrize(
    ("method", "path"),
    [
        ("POST", "/api/v1/auth/login"),
        ("POST", "/api/v1/auth/register"),
        ("POST", "/api/v1/auth/logout"),
        ("POST", "/api/v1/tasks"),
        ("PATCH", "/api/v1/tasks/00000000-0000-0000-0000-000000000001"),
        ("DELETE", "/api/v1/groups/00000000-0000-0000-0000-000000000001"),
        ("POST", "/api/v1/invitations/test-token/accept"),
    ],
)
async def test_every_write_requires_a_csrf_token(browser, auth_service, method, path):
    response = await browser.request(method, path, json={})
    assert response.status_code == 403
    assert response.json() == {"detail": "CSRF validation failed"}
    auth_service.login.assert_not_awaited()
    auth_service.logout.assert_not_awaited()


async def test_csrf_cookie_alone_or_a_forged_pair_is_rejected(browser, auth_service):
    await browser.get("/api/v1/auth/csrf")
    body = {"login": "User", "password": "secret"}
    assert (await browser.post("/api/v1/auth/login", json=body)).status_code == 403
    forged = create_csrf_token("an-attacker-controlled-secret", None, new_token())
    result = await browser.post("/api/v1/auth/login", json=body, headers={"X-CSRF-Token": forged})
    assert result.status_code == 403
    auth_service.login.assert_not_awaited()


async def test_untrusted_origin_cannot_write_even_with_a_valid_token(browser, auth_service):
    bootstrap = await browser.get("/api/v1/auth/csrf")
    response = await browser.post(
        "/api/v1/auth/login",
        json={"login": "User", "password": "secret"},
        headers={
            "Origin": "https://evil.example.org",
            "X-CSRF-Token": bootstrap.json()["csrf_token"],
        },
    )
    assert response.status_code == 403
    assert "access-control-allow-origin" not in response.headers
    auth_service.login.assert_not_awaited()


async def test_login_changes_csrf_binding_and_logout_clears_both_cookies(browser, settings):
    anonymous = (await browser.get("/api/v1/auth/csrf")).json()["csrf_token"]
    response = await browser.post(
        "/api/v1/auth/login",
        json={"login": "User", "password": "secret"},
        headers={"X-CSRF-Token": anonymous, "Origin": settings.allowed_origins[0]},
    )
    assert response.status_code == 200
    assert browser.cookies.get("__Host-session")
    stale = await browser.post("/api/v1/auth/logout", headers={"X-CSRF-Token": anonymous})
    assert stale.status_code == 403
    authenticated = (await browser.get("/api/v1/auth/csrf")).json()["csrf_token"]
    assert authenticated != anonymous
    logout = await browser.post("/api/v1/auth/logout", headers={"X-CSRF-Token": authenticated})
    assert logout.status_code == 204
    assert browser.cookies.get("__Host-session") is None
    assert browser.cookies.get("__Host-csrf") is None


def test_csrf_signature_is_bound_to_cookie_session_and_secret():
    secret, session, nonce = new_token(), new_token(), new_token()
    token = create_csrf_token(secret, session, nonce)
    assert verify_csrf_token(secret, session, nonce, token)
    for key, auth, cookie, value in [
        (new_token(), session, nonce, token),
        (secret, new_token(), nonce, token),
        (secret, None, nonce, token),
        (secret, session, new_token(), token),
        (secret, session, None, token),
        (secret, session, nonce, None),
        (secret, session, nonce, token + "я"),
    ]:
        assert not verify_csrf_token(key, auth, cookie, value)


def test_cross_site_cookie_attributes_are_preserved_when_deleted():
    settings = make_settings(app_env="production", cookie_samesite="none", cookie_partitioned=True)
    response = Response()
    set_session_cookie(response, settings, new_token())
    set_csrf_cookie(response, settings, new_token())
    for header in response.headers.getlist("set-cookie"):
        cookie = SimpleCookie(header)
        item = next(iter(cookie.values()))
        assert item["secure"] and item["httponly"] and item["partitioned"]
        assert item["samesite"] == "none" and item["path"] == "/"
        assert not item["domain"]
    response = Response()
    clear_session_cookie(response, settings)
    clear_csrf_cookie(response, settings)
    for header in response.headers.getlist("set-cookie"):
        item = next(iter(SimpleCookie(header).values()))
        assert item["max-age"] == "0" and item["partitioned"]
        assert item["secure"] and item["samesite"] == "none"


@pytest.mark.parametrize("changes", [{"cookie_samesite": "none"}, {"cookie_partitioned": True}])
def test_cross_site_cookie_options_require_secure(changes):
    with pytest.raises(ValidationError):
        make_settings(allow_insecure_cookies=True, **changes)


@pytest.mark.parametrize("secret", ["short", "replace-with-a-random-secret-at-least-32-characters"])
def test_csrf_secret_requires_a_real_value(secret):
    with pytest.raises(ValidationError):
        make_settings(csrf_secret=secret)
