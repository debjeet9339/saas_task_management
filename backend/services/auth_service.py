from datetime import datetime

from config.database import users_collection
from config.security import (
    hash_password,
    verify_password,
    create_access_token,
)


async def register_user(data):
    existing_user = await users_collection.find_one(
        {"email": data.email}
    )

    if existing_user:
        return {"error": "User already exists"}

    user = {
        "name": data.name,
        "email": data.email,
        "password_hash": hash_password(data.password),
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
    }

    result = await users_collection.insert_one(user)

    token = create_access_token({"user_id": str(result.inserted_id)})

    return {
        "message": "User created successfully",
        "access_token": token,
    }


async def login_user(data):
    user = await users_collection.find_one({"email": data.email})

    if not user:
        return {"error": "Invalid credentials"}

    is_valid = verify_password(
        data.password,
        user["password_hash"],
    )

    if not is_valid:
        return {"error": "Invalid credentials"}

    token = create_access_token({"user_id": str(user["_id"])})

    return {
        "message": "Login successful",
        "access_token": token,
    }