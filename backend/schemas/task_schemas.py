from pydantic import BaseModel


class CreateTaskSchema(BaseModel):
    workspace_id: str
    board_id: str
    column_id: str
    title: str
    description: str
    priority: str