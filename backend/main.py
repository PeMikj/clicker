from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

click_count = 0

@app.get("/clicks")
def get_clicks():
    return {"click_count": click_count}

@app.post("/clicks")
def increment_clicks():
    global click_count
    click_count += 1
    return {"click_count": click_count}