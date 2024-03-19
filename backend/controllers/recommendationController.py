from fastapi import APIRouter
from dtypes import ApiResponse,RecommenderResponse,RecommendRequest
from utils import Recommender

router = APIRouter(prefix='/suggestions')
rec = Recommender()

@router.post("/recommend")
async def recommend(rec_req: RecommendRequest):
    recs = rec.recommend(**rec_req.__dict__)
    return ApiResponse(status=200,message='ok',data=RecommenderResponse(**recs))


@router.get("/info/{info_req}")
async def getInfo(info_req:str):
    info = rec.get_book_info(info_req)
    print(info)
    return ApiResponse(status=200,message='ok',data=info)
    