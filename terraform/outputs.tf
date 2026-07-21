output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_ids" {
  value = aws_subnet.public[*].id
}

output "web_security_group_id" {
  value = aws_security_group.web.id
}

output "db_security_group_id" {
  value = aws_security_group.db.id
}

output "eks_cluster_name" {
  value = aws_eks_cluster.main.name
}

output "eks_cluster_endpoint" {
  value = aws_eks_cluster.main.endpoint
}

output "ecr_repository_urls" {
  description = "ECR repository URLs for all services"
  value = {
    gateway          = aws_ecr_repository.gateway.repository_url
    auth             = aws_ecr_repository.auth.repository_url
    product_service  = aws_ecr_repository.product_service.repository_url
    orders           = aws_ecr_repository.orders.repository_url
    user_service     = aws_ecr_repository.user_service.repository_url
    frontend         = aws_ecr_repository.frontend.repository_url
  }
}
