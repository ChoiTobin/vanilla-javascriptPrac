from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

app = FastAPI()

answer ='LARGE'

@app.get('/answer')
def get_answer():
        return answer
    # 정답 리턴.

app.mount("/", StaticFiles(directory="static",html=True), name="static")
