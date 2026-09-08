from typing import Annotated

from fastapi import APIRouter
from fastapi.params import Form

router = APIRouter()

# Endpoint for getting JD from front end to send to openAI for analysis
@router.post("/job-description/upload")
async def post_job_description(job_description: Annotated[str, Form()]):
    # Placeholder for actual analysis logic
    return {
        "message": "Job description received successfully",
        "job_description": job_description,
    }