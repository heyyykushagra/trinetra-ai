import cv2
import os
import uuid
from services.detector import detect_vehicles
from services.rag_service import generate_insight


async def process_video(file):

    # Unique filename
    unique_id = str(uuid.uuid4())
    input_path = f"uploads/{unique_id}.mp4"

    # Save uploaded file
    with open(input_path, "wb") as f:
        f.write(await file.read())

    cap = cv2.VideoCapture(input_path)

    if not cap.isOpened():
        raise Exception("Invalid video file")

    total_detections = 0
    frame_count = 0

    # Process EVERY frame for accuracy
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_count += 1

        vehicle_count = detect_vehicles(frame)
        total_detections += vehicle_count

    cap.release()

    if frame_count == 0:
        raise Exception("No frames processed")

    # Average vehicles per frame
    avg_vehicles_per_frame = total_detections / frame_count

    # Congestion probability logic (more realistic)
    if avg_vehicles_per_frame > 20:
        congestion_prob = 90
    elif avg_vehicles_per_frame > 15:
        congestion_prob = 75
    elif avg_vehicles_per_frame > 10:
        congestion_prob = 55
    elif avg_vehicles_per_frame > 5:
        congestion_prob = 30
    else:
        congestion_prob = 10

    status = "HIGH" if congestion_prob > 70 else "LOW"

    # Generate LLM insight
    recommendation = generate_insight(
        total_detections,
        round(avg_vehicles_per_frame, 2),
        congestion_prob
    )

    return {
        "vehicleCount": total_detections,
        "density": round(avg_vehicles_per_frame, 2),
        "congestionProb": congestion_prob,
        "status": status,
        "recommendation": recommendation,
        "framesProcessed": frame_count
    }