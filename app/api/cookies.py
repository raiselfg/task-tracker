from fastapi import Response

from app.core.config import Settings


def set_session_cookie(
    response: Response, settings: Settings, token: str, max_age: int | None = None
) -> None:
    response.set_cookie(
        key=settings.cookie_name,
        value=token,
        max_age=settings.session_ttl_seconds if max_age is None else max_age,
        secure=not settings.allow_insecure_cookies,
        httponly=True,
        samesite=settings.cookie_samesite,
        partitioned=settings.cookie_partitioned,
        path="/",
    )


def clear_session_cookie(response: Response, settings: Settings) -> None:
    response.delete_cookie(
        key=settings.cookie_name,
        path="/",
        secure=not settings.allow_insecure_cookies,
        httponly=True,
        samesite=settings.cookie_samesite,
        partitioned=settings.cookie_partitioned,
    )


def set_csrf_cookie(response: Response, settings: Settings, nonce: str) -> None:
    response.set_cookie(
        key=settings.csrf_cookie_name,
        value=nonce,
        max_age=settings.session_ttl_seconds,
        secure=not settings.allow_insecure_cookies,
        httponly=True,
        samesite=settings.cookie_samesite,
        partitioned=settings.cookie_partitioned,
        path="/",
    )


def clear_csrf_cookie(response: Response, settings: Settings) -> None:
    response.delete_cookie(
        key=settings.csrf_cookie_name,
        path="/",
        secure=not settings.allow_insecure_cookies,
        httponly=True,
        samesite=settings.cookie_samesite,
        partitioned=settings.cookie_partitioned,
    )
