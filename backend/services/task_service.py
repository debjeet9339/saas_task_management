from datetime import datetime

from config.database import tasks_collection


async def create_task(data, user_id):
    task = {
        "workspace_id": data.workspace_id,
        "board_id": data.board_id,
        "column_id": data.column_id,
        "title": data.title,
        "description": data.description,
        "priority": data.priority,
        "status": "todo",
        "created_by": user_id,
        "assigned_to": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await tasks_collection.insert_one(task)

    return {
        "message": "Task created",
        "task_id": str(result.inserted_id),
    }


async def get_tasks(workspace_id: str):
    tasks = []

    cursor = tasks_collection.find({
        "workspace_id": workspace_id
    })

    async for task in cursor:
        task["_id"] = str(task["_id"])
        tasks.append(task)

    return tasks