from pydantic import BaseModel

class ApiResponse(BaseModel):
    status: int
    message: str
    data: list | dict | None = None
