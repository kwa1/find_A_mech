resource "aws_api_gateway_rest_api" "mechanic_finder_api" {
  name        = var.api_name
  description = "API to find nearest mechanics"
}

resource "aws_api_gateway_resource" "mechanics_resource" {
  rest_api_id = aws_api_gateway_rest_api.mechanic_finder_api.id
  parent_id   = aws_api_gateway_rest_api.mechanic_finder_api.root_resource_id
  path_part   = "mechanics"
}

resource "aws_api_gateway_method" "get_mechanics" {
  rest_api_id   = aws_api_gateway_rest_api.mechanic_finder_api.id
  resource_id   = aws_api_gateway_resource.mechanics_resource.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.cognito_authorizer.id
}

resource "aws_api_gateway_authorizer" "cognito_authorizer" {
  rest_api_id = aws_api_gateway_rest_api.mechanic_finder_api.id
  name        = "CognitoAuthorizer"
  type        = "COGNITO_USER_POOLS"
  provider_arns = [module.cognito.user_pool_arn]
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id             = aws_api_gateway_rest_api.mechanic_finder_api.id
  resource_id             = aws_api_gateway_resource.mechanics_resource.id
  http_method             = aws_api_gateway_method.get_mechanics.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = var.lambda_arn
}

variable "lambda_arn" {}
variable "api_name" {}
