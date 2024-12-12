# modules/dynamodb/variables.tf

variable "table_name" {
  description = "The name of the DynamoDB table"
  type        = string
}

variable "hash_key" {
  description = "The hash key for the DynamoDB table"
  type        = string
  default     = "mechanic_id"
}

variable "billing_mode" {
  description = "The billing mode for DynamoDB"
  type        = string
  default     = "PAY_PER_REQUEST"  # Use On-demand capacity by default
}
