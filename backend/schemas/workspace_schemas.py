from pydantic import BaseModel


class CreateWorkspaceSchema(BaseModel):
    name: str
    description: str | None = ""