import requests

OLLAMA_URL = "http://localhost:11434/api/generate"

def generate_insight(vehicle_count, density, congestion_prob):

    prompt = f"""
    Traffic Data:
    Vehicle Count: {vehicle_count}
    Density: {density}
    Congestion Probability: {congestion_prob}%

    Provide short actionable recommendation for traffic police.
    Maximum 2 lines.
    """

    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": "llama3",
                "prompt": prompt,
                "stream": False
            },
            timeout=20
        )

        return response.json().get("response", "No insight generated.")
    except:
        return "LLM unavailable. Apply manual traffic control."
        