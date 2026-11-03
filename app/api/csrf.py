from fastapi import HTTPException, Request

from app.api.dependencies import SessionTokenDep, SettingsDep
from app.core.security import verify_csrf_token


def validate_csrf(request: Request, settings: SettingsDep, session_token: SessionTokenDep) -> None:
    if request.method in {"GET", "HEAD", "OPTIONS"}:
        return
    origin = request.headers.get("origin")
    if origin is not None and origin not in settings.allowed_origins:
        raise HTTPException(status_code=403, detail="CSRF validation failed")
    if not verify_csrf_token(
        settings.csrf_secret.get_secret_value(),
        session_token,
        request.cookies.get(settings.csrf_cookie_name),
        request.headers.get("x-csrf-token"),
    ):
        raise HTTPException(status_code=403, detail="CSRF validation failed")
