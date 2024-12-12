# modules/s3/variables.tf

variable "bucket_name" {
  description = "The name of the S3 bucket for frontend hosting"
  type        = string
}

variable "region" {
  description = "The AWS region where the S3 bucket is located"
  type        = string
  default     = "us-east-1"
}
