from pydantic import BaseModel, EmailStr
from datetime import datetime


class UserModel(BaseModel):
    name: str
    email: EmailStr
    password_hash: str
    avatar: str | None = None
    is_verified: bool = False
    created_at: datetime
    updated_at: datetime