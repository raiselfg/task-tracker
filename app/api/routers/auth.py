from fastapi import APIRouter, HTTPException, Request, Response

from app.api.cookies import (
    clear_csrf_cookie,
    clear_session_cookie,
    set_csrf_cookie,
    set_session_cookie,
)
from app.api.dependencies import (
    AuthServiceDep,
    CurrentSessionDep,
    SessionTokenDep,
    SettingsDep,
)
from app.core.security import create_csrf_token, new_token, valid_token
from app.schemas.auth import Credentials, CsrfTokenRead
from app.schemas.user import UserRead
from app.services.auth import (
    AuthenticationRequiredError,
    InvalidCredentialsError,
    LoginAlreadyExistsError,
)

router = APIRouter(prefix="/auth", tags=["auth"])


@router.get("/csrf", response_model=CsrfTokenRead)
async def csrf_token(
    request: Request, response: Response, settings: SettingsDep, token: SessionTokenDep
):
    nonce = request.cookies.get(settings.csrf_cookie_name)
    if nonce is None or not valid_token(nonce):
        nonce = new_token()
    set_csrf_cookie(response, settings, nonce)
    response.headers["Cache-Control"] = "no-store"
    return CsrfTokenRead(
        csrf_token=create_csrf_token(settings.csrf_secret.get_secret_value(), token, nonce)
    )


@router.post("/register", status_code=201, response_model=UserRead)
async def register(body: Credentials, auth: AuthServiceDep):
    try:
        return await auth.register(body.login, body.password.get_secret_value())
    except LoginAlreadyExistsError:
        raise HTTPException(status_code=409, detail="Login already taken") from None


@router.post("/login", response_model=UserRead)
async def login(body: Credentials, response: Response, auth: AuthServiceDep, settings: SettingsDep):
    try:
        user, token = await auth.login(body.login, body.password.get_secret_value())
    except InvalidCredentialsError:
        raise HTTPException(status_code=401, detail="Invalid login or password") from None
    set_session_cookie(response, settings, token)
    return user


@router.post("/logout", status_code=204)
async def logout(
    response: Response, auth: AuthServiceDep, token: SessionTokenDep, settings: SettingsDep
):
    try:
        await auth.logout(token)
    except AuthenticationRequiredError:
        raise HTTPException(status_code=401, detail="Authentication required") from None
    clear_session_cookie(response, settings)
    clear_csrf_cookie(response, settings)


@router.get("/me", response_model=UserRead)
async def me(current_session: CurrentSessionDep):
    return current_session.user
