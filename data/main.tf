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
#module "s3_frontend" {
#  source      = "./modules/s3"
#  bucket_name = "mechanic-finder-frontend"
#}
#module "cloudfront" {
 # source              = "./modules/cloudfront"
 # bucket_name         = module.s3_frontend.bucket_name
 # bucket_domain_name  = module.s3_frontend.bucket_name
#  acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abcde-12345-67890-abcdef" # Replace with your ACM certificate ARN
 # domain_name         = "www.ghfindmac.com"
 # tags                = { Environment = "Production", Application = "MechanicFinder" }
#}

#module "route53" {
#  source                 = "./modules/route53"
 # root_domain            = "ghfindmac.com"
#  subdomain              = "www"
 # cloudfront_domain_name = module.cloudfront.cloudfront_domain_name
 # cloudfront_zone_id     = "Z2FDTNDATAQYW2" # CloudFront's hosted zone ID
#}
