from repositories import Recommender
from dtypes import ApiResponse
class RecommendationService:
    recommender: Recommender

    def __init__(self):
        self.recommender = Recommender()

    def recommend(self,user_id:int,num_users:int,num_books:int):
        result = self.recommender.recommend(user_id,num_users,num_books)
        if(result == None):
            return 
        
        

