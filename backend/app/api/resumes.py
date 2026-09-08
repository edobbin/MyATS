from typing import Annotated

from fastapi import APIRouter, File, UploadFile

from app.services.process_resume import process_resume_upload

router = APIRouter()

# Endpoint for submitting resume from front end to send to openAI for analysis
@router.post("/resume/upload")
async def upload_resume(resume: Annotated[UploadFile, File()]):
    resume_result = await process_resume_upload(resume)

    return {
        "message": "Resume parsed successfully",
        **resume_result,    
    }