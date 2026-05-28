from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware

from routes.auth_routes import router as auth_router
from routes.workspace_routes import router as workspace_router
from routes.task_routes import router as task_router
from routes.user_routes import router as user_router

from websocket.manager import manager
from routes.workspace_routes import (
    router as workspace_router,
)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)
app.include_router(workspace_router)
app.include_router(task_router)
app.include_router(user_router)
app.include_router(workspace_router)

@app.get("/")
async def root():
    return {
        "message": "SaaS Task Management API Running"
    }


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)

    try:
        while True:
            data = await websocket.receive_json()

            await manager.broadcast({
                "message": data
            })

    except Exception:
        manager.disconnect(websocket)