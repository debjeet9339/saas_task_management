from pydantic import BaseModel
from datetime import datetime


class WorkspaceModel(BaseModel):
    name: str
    slug: str
    owner_id: str
    description: str | None = None
    visibility: str = "private"
    member_count: int = 1
    created_at: datetime
    updated_at: datetime