$ACCOUNT_ID = aws sts get-caller-identity --query Account --output text
$REGION = "us-east-1"
$REPOSITORY = "myats-backend"

$ECR_URI = "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPOSITORY"

aws ecr get-login-password --region $REGION |
docker login --username AWS --password-stdin "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com"

docker tag myats-lambda:latest "${ECR_URI}:latest"
docker push "${ECR_URI}:latest"