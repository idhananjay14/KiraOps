#!/bin/bash
set -e

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

kubectl create namespace monitoring --dry-run=client -o yaml | kubectl apply -f -

helm install monitoring prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  -f monitoring/values.yaml
