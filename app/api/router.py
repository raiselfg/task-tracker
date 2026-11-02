from fastapi import APIRouter, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.api.routers.auth import router as auth_router
from app.api.routers.groups import router as groups_router
from app.api.routers.invitations import router as invitations_router
from app.api.routers.tasks import router as tasks_router

api_router = APIRouter(prefix="/api/v1")
api_router.include_router(auth_router)
api_router.include_router(groups_router)
api_router.include_router(invitations_router)
api_router.include_router(tasks_router)


async def validation_error(request: Request, exc: RequestValidationError) -> JSONResponse:
    # FastAPI's default response includes input values, including invalid passwords.
    return JSONResponse(
        status_code=422,
        content={
            "detail": [
                {"loc": error["loc"], "msg": error["msg"], "type": error["type"]}
                for error in exc.errors()
            ]
        },
    )
