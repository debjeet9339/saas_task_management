from fastapi import APIRouter, Depends

from middleware.auth_middleware import get_current_user
from schemas.task_schemas import CreateTaskSchema
from services.task_service import (
    create_task,
    get_tasks,
)


router = APIRouter(
    prefix="/api/v1/tasks",
    tags=["Tasks"],
)


@router.post("/")
async def create(
    data: CreateTaskSchema,
    user=Depends(get_current_user),
):
    return await create_task(data, user["user_id"])


@router.get("/{workspace_id}")
async def fetch_tasks(
    workspace_id: str,
    user=Depends(get_current_user),
):
    return await get_tasks(workspace_id)