resource "aws_route53_zone" "domain_zone" {
  name = var.root_domain
}

resource "aws_route53_record" "cloudfront_record" {
  zone_id = aws_route53_zone.domain_zone.id
  name    = var.subdomain
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_zone_id
    evaluate_target_health = false
  }
}

output "route53_zone_id" {
  value = aws_route53_zone.domain_zone.id
}
