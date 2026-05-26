from fastapi import APIRouter

from schemas.auth_schema import (
    RegisterSchema,
    LoginSchema,
)

from services.auth_service import (
    register_user,
    login_user,
)


router = APIRouter(prefix="/api/v1/auth", tags=["Auth"])


@router.post("/register")
async def register(data: RegisterSchema):
    return await register_user(data)


@router.post("/login")
async def login(data: LoginSchema):
    return await login_user(data)