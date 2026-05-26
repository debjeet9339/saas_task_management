from motor.motor_asyncio import AsyncIOMotorClient
from config.settings import settings


client = AsyncIOMotorClient(settings.MONGO_URL)
database = client[settings.DATABASE_NAME]


users_collection = database["users"]
workspaces_collection = database["workspaces"]
tasks_collection = database["tasks"]