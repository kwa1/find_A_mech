resource "aws_cognito_user_pool" "user_pool" {
  name = "mechanic-finder-user-pool"
}

resource "aws_cognito_user_pool_client" "user_pool_client" {
  name         = "mechanic-finder-client"
  user_pool_id = aws_cognito_user_pool.user_pool.id
  generate_secret = true
}

output "user_pool_arn" {
  value = aws_cognito_user_pool.user_pool.arn
}
