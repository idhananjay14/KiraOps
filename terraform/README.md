# KiraOps — Terraform Infrastructure

Provisions the AWS infrastructure for KiraOps: networking, container registry, and (optionally) an EKS cluster for production Kubernetes deployment.

## What's provisioned

| Resource | Status |
|---|---|
| VPC (10.0.0.0/16) + Internet Gateway + 2 public subnets + route table | Applied (live) |
| Security Groups (web: 80/443, db: 5432 from web SG only) | Applied (live) |
| 6 ECR repositories (one per microservice) | Applied (live) |
| EKS cluster + managed node group + IAM roles | Code complete — not deployed |

## Why EKS is not deployed

An EKS control plane costs ~$0.10/hour (~$73/month) plus worker node costs, none of which fall under the AWS free tier. For this portfolio project, the EKS module is written and validated (`terraform plan` succeeds cleanly) to demonstrate the design, but AWS deployment is intentionally skipped to avoid ongoing cloud costs. Local Kubernetes development uses `kind` instead — see `/k8s`.

## Usage

```bash
terraform init
terraform validate
terraform plan
```

`terraform apply` was run once for the VPC, security groups, and ECR repositories listed above. The EKS resources in `eks.tf` are intentionally left unapplied — do not run `terraform apply` without reviewing cost implications first.

## Structure

- `provider.tf` — AWS provider config
- `variables.tf` — input variables with validation
- `vpc.tf` — VPC, subnets, IGW, routing
- `security_groups.tf` — web and db security groups
- `ecr.tf` — container registries
- `eks.tf` — EKS cluster + node group (not applied)
- `outputs.tf` — VPC ID, subnet IDs, SG IDs, ECR URLs, EKS cluster details
