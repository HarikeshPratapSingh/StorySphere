from pydantic import BaseModel

class RecommendRequest(BaseModel):
    user_id: int
    num_users: int
    num_books: int