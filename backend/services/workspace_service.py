from datetime import datetime

from config.database import workspaces_collection


async def create_workspace(data, user_id):
    workspace = {
        "name": data.name,
        "slug": data.name.lower().replace(" ", "-"),
        "description": data.description,
        "owner_id": user_id,
        "member_count": 1,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await workspaces_collection.insert_one(workspace)

    return {
        "message": "Workspace created",
        "workspace_id": str(result.inserted_id),
    }