resource "aws_lambda_function" "find_nearest_mechanic" {
  function_name = var.function_name

  s3_bucket = var.source_path
  s3_key    = "lambda-code.zip"  # Assuming the Lambda code is uploaded to S3
  handler   = var.handler
  runtime   = var.runtime

  role = aws_iam_role.lambda_role.arn

  environment {
    variables = {
      DYNAMODB_TABLE_NAME = module.dynamodb.table_name
    }
  }
}

resource "aws_iam_role" "lambda_role" {
  name = "${var.function_name}-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_policy" "lambda_policy" {
  name        = "${var.function_name}-policy"
  description = "Policy for Lambda to access DynamoDB and CloudWatch logs."

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = [
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:GetItem"
        ]
        Effect   = "Allow"
        Resource = module.dynamodb.table_arn
      },
      {
        Action   = [
          "logs:*"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy_attachment" {
  policy_arn = aws_iam_policy.lambda_policy.arn
  role       = aws_iam_role.lambda_role.name
}

variable "function_name" {}
variable "handler" {}
variable "runtime" {}
variable "source_path" {}
