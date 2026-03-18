# Trinetra AI

Drone-Based Traffic Intelligence System using Computer Vision, Machine Learning, and LLMs.

---

## Overview

Trinetra AI is an intelligent traffic monitoring system designed to analyze real-time traffic conditions using drone-based video input. It combines computer vision, machine learning, and language models to detect vehicles, predict congestion, and generate explainable insights for decision-making.

The system is built with a focus on real-world deployment, scalability, and end-to-end data processing.

---

## Key Features

- Real-time vehicle detection using YOLO and OpenCV  
- Traffic congestion prediction using Random Forest and XGBoost  
- High-accuracy prediction model (~98%)  
- LLM-based explanation layer using Ollama  
- End-to-end pipeline from detection to decision support  

---

## System Architecture

<p align="center">
  <img src="YOUR_ARCHITECTURE_IMAGE_LINK" width="85%" />
</p>

The system processes drone video input through a multi-stage AI pipeline:

- Video frames are extracted from drone feed  
- Vehicles are detected using YOLO and OpenCV  
- Traffic features are computed (density, flow, count)  
- Machine learning models predict congestion  
- LLM generates human-readable explanations  

---

## Workflow

1. Capture video stream from drone feed  
2. Process frames and detect vehicles using YOLO  
3. Extract traffic-related features such as density and movement  
4. Predict congestion levels using trained ML models  
5. Generate human-readable explanations using LLM  

---

## Demo

### Landing Interface

<p align="center">
  <img src="https://github.com/heyyykushagra/trinetra-ai/blob/main/Screenshot%202026-02-26%20005938.png" width="90%" />
</p>

The landing interface introduces Trinetra AI as an intelligent traffic infrastructure system. It highlights real-time monitoring, congestion forecasting, and scalable system design.

---

### AI Control Dashboard

<p align="center">
  <img src="https://github.com/heyyykushagra/trinetra-ai/blob/main/Screenshot%202026-02-26%20005954.png" width="90%" />
</p>

The dashboard processes traffic data in real time and displays key metrics such as congestion probability, vehicle count, and density.

---

### Video Analysis and Prediction

<p align="center">
  <img src="https://github.com/heyyykushagra/trinetra-ai/blob/main/Screenshot%202026-02-26%20013126.png" width="90%" />
</p>

Users can upload traffic footage, run AI-based analysis, and receive predictions along with system-generated insights.

---

### AI Recommendation Engine

The system generates actionable recommendations based on traffic conditions, enabling intelligent decision-making for congestion control.

---

## Demo Video

https://your-video-link.com

---

## Tech Stack

**Programming Language**
- Python
- JavaScript

**Computer Vision**
- YOLO
- OpenCV (cv2)

**Machine Learning**
- Random Forest
- XGBoost

**AI / LLM**
- Ollama

**Frontend**
- HTML, CSS, JavaScript

**Backend**
- Node.js

---

## Project Structure
