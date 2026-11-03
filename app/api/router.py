from fastapi import APIRouter, Depends, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.api.csrf import validate_csrf
from app.api.routers.auth import router as auth_router
from app.api.routers.checklists import router as checklists_router
from app.api.routers.groups import router as groups_router
from app.api.routers.invitations import router as invitations_router
from app.api.routers.tasks import router as tasks_router

api_router = APIRouter(prefix="/api/v1", dependencies=[Depends(validate_csrf)])
api_router.include_router(auth_router)
api_router.include_router(groups_router)
api_router.include_router(invitations_router)
api_router.include_router(tasks_router)
api_router.include_router(checklists_router)


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
