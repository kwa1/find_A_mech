# modules/api-gateway/variables.tf

variable "lambda_arn" {
  description = "The ARN of the Lambda function to be invoked by API Gateway"
  type        = string
}

variable "api_name" {
  description = "The name of the API Gateway"
  type        = string
}
