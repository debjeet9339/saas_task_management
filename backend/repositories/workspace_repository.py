from config.database import (
    workspaces_collection,
)


async def create_workspace_repository(
    workspace_data: dict
):
    return await workspaces_collection.insert_one(
        workspace_data
    )


async def get_user_workspaces_repository(
    user_id: str
):
    cursor = workspaces_collection.find({
        "owner_id": user_id
    })

    workspaces = []

    async for workspace in cursor:
        workspace["_id"] = str(
            workspace["_id"]
        )

        workspaces.append(workspace)

    return workspaces