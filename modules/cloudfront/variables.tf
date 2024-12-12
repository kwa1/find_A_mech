variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "bucket_domain_name" {
  description = "The domain name of the S3 bucket"
  type        = string
}

variable "acm_certificate_arn" {
  description = "The ARN of the ACM certificate"
  type        = string
}

variable "domain_name" {
  description = "The custom domain name for the CloudFront distribution"
  type        = string
}

variable "tags" {
  description = "A map of tags to assign to the resources"
  type        = map(string)
  default     = {}
}
