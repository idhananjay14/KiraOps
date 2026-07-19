variable "project_name" {
  description = "Project name, used as a prefix for resource naming"
  type        = string
  default     = "kiraops"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "AZs to spread subnets across"
  type        = list(string)
  default     = ["ap-south-1a", "ap-south-1b"]
}
