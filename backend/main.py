from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from services.processor import process_video
import os

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure uploads folder exists
os.makedirs("uploads", exist_ok=True)

# ================= API =================

@app.post("/analyze")
async def analyze_video(file: UploadFile = File(...)):
    try:
        return await process_video(file)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ================= STATIC FILES =================

# Project root folder (TRINETRA PROTOTYPE)
BASE_DIR = Path(__file__).resolve().parent.parent

app.mount("/", StaticFiles(directory=BASE_DIR, html=True), name="static")