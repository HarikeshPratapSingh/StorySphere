from pydantic import BaseModel

class RecommenderResponse(BaseModel):
    user_ids: list
    book_ids: list