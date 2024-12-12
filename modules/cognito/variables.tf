# modules/cognito/variables.tf

variable "user_pool_name" {
  description = "The name of the Cognito user pool"
  type        = string
  default     = "mechanic-finder-user-pool"
}

variable "user_pool_client_name" {
  description = "The name of the Cognito user pool client"
  type        = string
  default     = "mechanic-finder-client"
}
