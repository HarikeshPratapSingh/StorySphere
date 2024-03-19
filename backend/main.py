from fastapi import FastAPI
from dtypes import ApiResponse
from controllers import suggestionRouter

app = FastAPI()
app.include_router(suggestionRouter)
    
@app.get("/")
def health():
    return ApiResponse(status=200, message="ok")
    