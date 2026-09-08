from fastapi import APIRouter, HTTPException
from google import genai
from google.genai import errors

router = APIRouter()
client = genai.Client()


@router.get("/gemini/test")
def test_gemini():
    try:
        response = client.models.generate_content(
            model="gemini-3.1-flash-lite",
            contents="what day of the week is it?",
        )

        return {
            "message": response.text,
        }

    except errors.APIError as e:
        raise HTTPException(
            status_code=503,
            detail=f"Gemini unavailable: {e!s}",
        )