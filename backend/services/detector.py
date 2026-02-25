from ultralytics import YOLO

MODEL_PATH = "yolov8n.pt"

# Load model once at startup
try:
    model = YOLO(MODEL_PATH)
except Exception as e:
    raise RuntimeError(f"Failed to load YOLO model: {e}")

# COCO vehicle class IDs
VEHICLE_CLASSES = [2, 3, 5, 7]  # car, motorcycle, bus, truck


def detect_vehicles(frame):
    """
    Detect vehicles in a single frame.
    Returns total vehicle count.
    """

    try:
        # Let YOLO handle resizing internally
        results = model(
            frame,
            imgsz=640,      # standard detection size
            conf=0.25,      # lower threshold for better recall
            iou=0.45,
            verbose=False
        )

        vehicle_count = 0

        for r in results:
            if r.boxes is None or len(r.boxes) == 0:
                continue

            for box in r.boxes:
                cls = int(box.cls.item())

                if cls in VEHICLE_CLASSES:
                    vehicle_count += 1

        return vehicle_count

    except Exception as e:
        # Fail safe: never crash pipeline
        print(f"Detection error: {e}")
        return 0