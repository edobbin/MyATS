docker buildx build `
  --platform linux/amd64 `
  --provenance=false `
  --load `
  -f backend/dockerfile.lambda `
  -t myats-lambda:latest `
  ./backend