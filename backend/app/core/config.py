import os

from dotenv import load_dotenv

load_dotenv()

APP_ENV = os.getenv("APP_ENV", "dev")

VALID_ENVIRONMENTS = {"dev", "demo", "prod"}

if APP_ENV not in VALID_ENVIRONMENTS:
    raise RuntimeError(f"Invalid APP_ENV: {APP_ENV}")


def get_env(name: str) -> str:
    value = os.getenv(name)

    if not value:
        raise RuntimeError(
            f"Missing required environment variable: {name}"
        )

    return value