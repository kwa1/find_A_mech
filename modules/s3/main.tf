resource "aws_s3_bucket" "frontend_bucket" {
  bucket = var.bucket_name
  website {
    index_document = "index.html"
  }
}

output "s3_bucket_url" {
  value = "http://${aws_s3_bucket.frontend_bucket.bucket}.s3-website-${var.region}.amazonaws.com"
}

variable "bucket_name" {}
variable "region" {
  default = "us-east-1"
}
