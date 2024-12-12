resource "aws_dynamodb_table" "mechanics_table" {
  name         = var.table_name
  billing_mode = "PAY_PER_REQUEST"  # On-demand mode for scaling with demand

  hash_key     = "mechanic_id"
  attribute {
    name = "mechanic_id"
    type = "S"
  }

  attribute {
    name = "location"
    type = "S"
  }
}

output "table_arn" {
  value = aws_dynamodb_table.mechanics_table.arn
}

variable "table_name" {}
