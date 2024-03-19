import pandas as pd
import pickle
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
class Recommender:

    def __init__(self) -> None:
        self.books = pd.read_csv("./utils/books.csv")
        self.ratings = pd.read_csv("./utils/ratings.csv")
        self.pivot = pickle.load(open( "./utils/pivot.pkl", "rb" ))
        self.usertoindex = pickle.load(open( "./utils/usertoindex.pkl", "rb" ))
        self.indextouser = pickle.load(open( "./utils/indextouser.pkl", "rb" ))

    def recommend(self,user_id:int,num_users:int,num_books:int) -> dict:
        row = self.pivot[self.usertoindex[user_id]]
        rec_users = cosine_similarity(row,self.pivot)[0]
        rec_users = np.argsort(rec_users)[::-1][:num_users+1]
        rec_users = [self.indextouser[x] for x in rec_users]
        rec_users = rec_users[1:]
        user_isbn = self.ratings[self.ratings['User-ID']==user_id]['ISBN']
        rec_books = self.ratings[self.ratings['User-ID'].isin(rec_users) & ~self.ratings['ISBN'].isin(user_isbn)]['ISBN'].value_counts()[:num_books].index.tolist()
        return {
            'user_ids':rec_users,
            'book_ids':rec_books
        }
    
    def get_book_info(self,isbn:str)->dict:
        book = self.books[self.books['ISBN'] == isbn].iloc[0]
        
        name = book['Book-Title']
        author = book['Book-Author']
        year_of_publication = book['Year-Of-Publication']
        publisher = book['Publisher']
        image_link = book['Image-URL-S']
        result = {
            'name': name,
            'author': author,
            'year_of_publication': year_of_publication,
            'publisher': publisher,
            'image_link': image_link
        }
        return result
