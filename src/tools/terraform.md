---
title: Terraform
description: Open-source infrastructure-as-code tool for provisioning and managing cloud and on-premises resources through declarative configuration files.
tags:
  - terraform
  - infrastructure-as-code
  - devops
  - cloud
  - provisioning
  - hashicorp
  - automation
category: DevOps & Cloud
url: https://www.terraform.io
image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1920px-Terraform_Logo.svg.png
---

# Terraform

**Terraform** is an open-source infrastructure-as-code (IaC) tool developed by HashiCorp that lets teams define cloud and on-premises infrastructure using declarative configuration files instead of manual clicks in a console. By describing the desired state of servers, networks, databases, and other resources in code, Terraform can create, update, and destroy infrastructure consistently and repeatably across providers like AWS, Azure, Google Cloud, and hundreds of others.

Because infrastructure becomes version-controlled code, teams get the same benefits software engineers rely on for application code — code review, history, and repeatable deployments — applied to servers and cloud resources.

---

## 🌟 High-Level Capabilities

- **Infrastructure as Code:** Define cloud and on-prem resources declaratively in HCL configuration files.
- **Multi-Cloud Support:** Provision resources across AWS, Azure, GCP, and hundreds of other providers.
- **State Management:** Track the current state of infrastructure to plan safe changes.
- **Plan & Apply Workflow:** Preview infrastructure changes before applying them.
- **Modules:** Package and reuse infrastructure configurations across projects.
- **Drift Detection:** Identify when real infrastructure diverges from defined configuration.

---

## ☁️ What It Helps You Do

Platform and DevOps engineers use Terraform to provision entire cloud environments — networks, compute, storage, and databases — from version-controlled code.

Teams managing multi-cloud or hybrid infrastructure use Terraform's provider ecosystem to manage resources across different platforms with a single, consistent workflow.

SREs use Terraform's plan-before-apply model to review exactly what will change before infrastructure is modified in production.

Organizations build reusable Terraform modules so new environments (staging, production, per-customer deployments) can be spun up consistently in minutes.

---

## 🚀 Why Terraform Stands Out

Terraform's declarative model means engineers describe the desired end state rather than scripting the individual steps to get there — Terraform figures out what needs to be created, updated, or destroyed to match.

Its provider ecosystem is enormous, covering not just major cloud platforms but SaaS tools, monitoring systems, and internal APIs, letting teams manage far more than raw servers through one tool.

The plan/apply workflow provides a critical safety check: engineers can see the exact diff of what will change before committing to a real infrastructure modification.

---

## 🧩 A Complete Provisioning Toolkit

Terraform's core workflow and ecosystem cover the full infrastructure lifecycle:

- Declarative HCL configuration language
- State files tracking real-world resource status
- `terraform plan` for previewing changes
- `terraform apply` for executing changes
- Reusable modules for standardized infrastructure patterns
- Remote state backends for team collaboration
- Workspaces for managing multiple environments
- A vast registry of community and official providers

This breadth is why Terraform has become a common standard for infrastructure automation across companies of every size.

---

## 📦 Common Workflows

- **Cloud Provisioning:** Create and manage servers, networks, and storage across cloud providers.
- **Multi-Environment Management:** Maintain consistent staging, QA, and production environments.
- **Multi-Cloud Deployments:** Manage resources across AWS, Azure, and GCP from one codebase.
- **Module Reuse:** Standardize infrastructure patterns across teams and projects.
- **Disaster Recovery:** Rebuild entire environments quickly from version-controlled configuration.
- **CI/CD Integration:** Automate infrastructure changes as part of deployment pipelines.

---

## 💡 Tips for Getting Started

- Start with a single cloud provider before exploring multi-cloud configurations.
- Always review the `terraform plan` output carefully before running `apply`.
- Use remote state storage (like an S3 backend) when working in a team.
- Break configurations into reusable modules once patterns start repeating.
- Pin provider and module versions to avoid unexpected changes from upstream updates.
- Store Terraform configuration in version control alongside application code.

---

## 🧠 Who It Is Great For

Terraform is built for DevOps engineers, platform teams, and SREs who need consistent, repeatable, and auditable infrastructure provisioning.

Its declarative approach and massive provider ecosystem have made it one of the most widely adopted infrastructure-as-code tools across cloud-native organizations.
