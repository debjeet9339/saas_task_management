from pydantic import BaseModel
from datetime import datetime


class TaskModel(BaseModel):
    workspace_id: str
    board_id: str
    column_id: str
    title: str
    description: str
    priority: str
    status: str
    assigned_to: list[str] = []
    created_by: str
    created_at: datetime
    updated_at: datetime