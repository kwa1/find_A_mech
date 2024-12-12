# terraform.tfvars

lambda_function_name = "FindNearestMechanic"
lambda_handler       = "index.handler"
lambda_runtime       = "nodejs18.x"
lambda_source_path   = "../backend"

api_gateway_name     = "MechanicFinderAPI"

dynamodb_table_name  = "MechanicDetails"

cognito_user_pool_name     = "mechanic-finder-user-pool"
cognito_user_pool_client_name = "mechanic-finder-client"

s3_bucket_name        = "mechanic-finder-frontend"


#bucket_name                = "mechanic-finder-frontend"
#acm_certificate_arn        = "arn:aws:acm:us-east-1:123456789012:certificate/abcde-12345-67890-abcdef"
#domain_name                = "www.ghfindmac.com"
#root_domain                = "ghfindmac.com"
#subdomain                  = "www"
#cloudfront_zone_id         = "Z2FDTNDATAQYW2" # CloudFront's hosted zone ID
tags = {
  Environment  = "Production"
  Application  = "MechanicFinder"
}
