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
