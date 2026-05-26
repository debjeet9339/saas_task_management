from fastapi import Header, HTTPException
from jose import jwt, JWTError

from config.settings import settings


async def get_current_user(
    authorization: str = Header(None),
):
    if not authorization:
        raise HTTPException(
            status_code=401,
            detail="Authorization token missing",
        )

    token = authorization.split(" ")[1]

    try:
        payload = jwt.decode(
            token,
            settings.JWT_SECRET,
            algorithms=[settings.JWT_ALGORITHM],
        )

        return payload

    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid token",
        )