from datetime import datetime

from repositories.workspace_repository import (
    create_workspace_repository,
    get_user_workspaces_repository,
)


async def create_workspace(
    data,
    user_id: str,
):
    workspace = {
        "name": data.name,
        "description": data.description,
        "owner_id": user_id,
        "member_count": 1,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await create_workspace_repository(
        workspace
    )

    return {
        "message": "Workspace created",
        "workspace_id": str(
            result.inserted_id
        ),
    }


async def get_user_workspaces(
    user_id: str
):
    return await get_user_workspaces_repository(
        user_id
    )