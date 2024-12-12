variable "root_domain" {
  description = "The root domain name (e.g., mechanicfinder.com)"
  type        = string
}

variable "subdomain" {
  description = "The subdomain to configure (e.g., www)"
  type        = string
}

variable "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  type        = string
}

variable "cloudfront_zone_id" {
  description = "The Route 53 hosted zone ID for CloudFront"
  type        = string
}
