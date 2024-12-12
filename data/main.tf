provider "aws" {
  region = "us-east-1"
}

module "api_gateway" {
  source     = "./modules/api-gateway"
  lambda_arn = module.lambda.lambda_arn
  api_name   = "MechanicFinderAPI"
}

module "lambda" {
  source        = "./modules/lambda"
  function_name = "FindNearestMechanic"
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  source_path   = "../backend"
}

module "dynamodb" {
  source     = "./modules/dynamodb"
  table_name = "MechanicDetails"
}

module "cognito" {
  source = "./modules/cognito"
}

module "s3_frontend" {
  source      = "./modules/s3"
  bucket_name = "mechanic-finder-frontend"
}
