from fastapi import APIRouter, Depends
from bson import ObjectId

from middleware.auth_middleware import get_current_user
from config.database import users_collection

router = APIRouter(
    prefix="/api/v1/users",
    tags=["Users"]
)


@router.get("/me")
async def get_me(
    user=Depends(get_current_user)
):
    current_user = await users_collection.find_one({
        "_id": ObjectId(user["user_id"])
    })

    return {
        "id": str(current_user["_id"]),
        "name": current_user["name"],
        "email": current_user["email"]
    }