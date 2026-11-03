from app.core.config import Settings


def make_settings(**overrides) -> Settings:
    values = dict(
        app_env="development",
        database_url="postgresql://test:test@localhost:5432/test",
        allowed_origins=["https://app.example.com"],
        allow_insecure_cookies=False,
        session_ttl_seconds=2592000,
        csrf_secret="test-csrf-secret-for-tests-only-32-characters",
    )
    values.update(overrides)
    return Settings(_env_file=None, **values)


def enable_csrf(client):
    async def add_csrf(request):
        if request.method in {"GET", "HEAD", "OPTIONS"}:
            return
        response = await client.get("/api/v1/auth/csrf")
        assert response.status_code == 200
        request.headers["X-CSRF-Token"] = response.json()["csrf_token"]
        request.headers.pop("Cookie", None)
        client.cookies.set_cookie_header(request)

    client.event_hooks["request"].append(add_csrf)
