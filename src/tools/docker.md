---
title: Docker
description: Platform for building, shipping, and running applications inside lightweight, portable containers.
tags:
  - docker
  - containers
  - devops
  - virtualization
  - deployment
  - microservices
  - command-line
category: DevOps & Cloud
image: https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg
url: https://www.docker.com
---

# Docker

**Docker** is a platform that lets developers package applications, along with all their dependencies and configuration, into standardized units called containers. Containers run consistently across any environment — a developer's laptop, a testing server, or a production cloud cluster — eliminating the classic "it works on my machine" problem.

Since its release in 2013, Docker has fundamentally changed how software is built, tested, and deployed, becoming a cornerstone technology of modern DevOps and cloud-native development.

---

## 🌟 High-Level Capabilities

- **Containerization:** Package applications with everything they need to run.
- **Portability:** Run identical containers on any machine that supports Docker.
- **Isolation:** Keep applications and their dependencies separate from the host system.
- **Image Management:** Build, version, and share reusable container images.
- **Orchestration Ready:** Integrate with tools like Docker Compose and Kubernetes.
- **Resource Efficiency:** Share the host OS kernel instead of running full virtual machines.

---

## 📦 What It Helps You Do

Docker solves a problem every developer has faced: code that runs perfectly on one machine but fails on another due to mismatched dependencies, library versions, or system configuration.

By packaging an application and its entire environment into an image, Docker guarantees that what runs on a developer's laptop is exactly what runs in staging and production.

Need to spin up a database for local testing? Pull an image and run it in seconds. Want to onboard a new team member without a lengthy setup guide? Hand them a `docker-compose.yml` file. Deploying to the cloud? Ship the same container image you tested locally.

This consistency dramatically reduces environment-related bugs and speeds up both development and deployment.

---

## 🚀 Why Docker Is So Widely Used

Before containers, isolating applications typically meant running full virtual machines, each with its own operating system — heavy, slow to start, and resource-intensive.

Docker containers share the host machine's kernel, making them dramatically lighter and faster to start, often in a fraction of a second. This efficiency allows dozens of containers to run on a single machine where only a few virtual machines could fit.

Docker also standardized how images are built and shared through the `Dockerfile` format and Docker Hub, a public registry hosting millions of pre-built images. This ecosystem effect means most software today — from databases to web servers to machine learning frameworks — is available as a ready-to-use Docker image.

---

## 💻 Core Commands

```bash
docker build -t myapp .        # Build an image from a Dockerfile
docker run -p 8080:80 myapp    # Run a container from an image
docker ps                      # List running containers
docker images                  # List local images
docker stop <container>        # Stop a running container
docker exec -it <container> sh # Open a shell inside a container
docker compose up              # Start a multi-container application
docker push myrepo/myapp       # Upload an image to a registry
```

---

## 📋 Example Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📦 Common Workflows

- **Local Development:** Spin up databases, caches, and services without installing them directly.
- **CI/CD Pipelines:** Build and test applications in clean, reproducible containers.
- **Microservices:** Run each service in its own isolated container.
- **Deployment:** Ship the exact same image from development through to production.
- **Environment Replication:** Reproduce a colleague's setup instantly instead of manually configuring dependencies.

---

## ⚙️ The Wider Ecosystem

| Tool           | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| Docker Compose | Define and run multi-container applications with a single file |
| Docker Hub     | Public registry for sharing container images                   |
| Kubernetes     | Orchestrate large numbers of containers across a cluster       |
| Docker Desktop | GUI application for managing containers on Windows/macOS       |
| BuildKit       | Faster, more efficient image building engine                   |

---

## 💡 Tips for Getting Started

- Keep images small by using minimal base images like `alpine`.
- Use `.dockerignore` to exclude unnecessary files from the build context.
- Combine related `RUN` commands to reduce the number of image layers.
- Use Docker Compose for multi-service local development setups.
- Never store secrets directly in a Dockerfile; use environment variables or secret managers instead.
- Regularly prune unused images and containers to free up disk space.

---

## 🧠 Who It Is Great For

Docker is invaluable for developers, DevOps engineers, QA teams, and system administrators who need consistent, reproducible environments across development, testing, and production.

Whether you're building a single web app, coordinating a microservices architecture, or setting up automated CI/CD pipelines, Docker provides the portability and isolation needed to ship software reliably.

Its lightweight containerization model, vast image ecosystem, and central role in modern DevOps practices have made Docker one of the most important tools in contemporary software engineering.
