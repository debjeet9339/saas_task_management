from fastapi import APIRouter, Depends

from middleware.auth_middleware import get_current_user
from schemas.workspace_schemas import CreateWorkspaceSchema
from services.workspace_service import create_workspace


router = APIRouter(
    prefix="/api/v1/workspaces",
    tags=["Workspaces"],
)


@router.post("/")
async def create(
    data: CreateWorkspaceSchema,
    user=Depends(get_current_user),
):
    return await create_workspace(data, user["user_id"])