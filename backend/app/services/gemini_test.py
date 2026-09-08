from dotenv import load_dotenv
from google import genai
import boto3
from fastapi import APIRouter

# Load variables from the .env file if you chose Method B
load_dotenv()

# Initialize the client. 
# It automatically reads the GEMINI_API_KEY environment variable.
client = genai.Client()

# Alternative initialization if passing manually:
# client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

def generate_text():
    # Make a text generation request using the recommended model
    response = client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents="what day of the week is it?"
    )
    
    # Print the model's textual output
    print(response.text)

if __name__ == "__main__":
    generate_text()


router = APIRouter()

@router.get("/test-ssm")
def test_ssm():
    ssm = boto3.client("ssm", region_name="us-east-1")

    response = ssm.get_parameter(
        Name="GEMINI_API_KEY",
        WithDecryption=True,
    )

    api_key = response["Parameter"]["Value"]

    return {
        "parameter_loaded": bool(api_key)
    }