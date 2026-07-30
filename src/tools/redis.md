---
title: Redis
description: In-memory data store used as a database, cache, message broker, and streaming engine for high-performance applications.
tags:
  - redis
  - database
  - caching
  - in-memory
  - key-value-store
  - message-broker
  - open-source
category: Databases
url: https://redis.io
image: https://upload.wikimedia.org/wikipedia/fr/thumb/6/6b/Redis_Logo.svg/1920px-Redis_Logo.svg.png
---

# Redis

**Redis** (Remote Dictionary Server) is an in-memory data store that doubles as a database, cache, message broker, and streaming platform. By keeping data in memory rather than on disk, Redis delivers sub-millisecond response times, which is why it sits at the heart of countless high-traffic applications that need speed above almost everything else.

Beyond simple key-value storage, Redis supports rich data structures — strings, hashes, lists, sets, sorted sets, streams, and more — making it far more versatile than a typical cache.

---

## 🌟 High-Level Capabilities

- **In-Memory Storage:** Store and retrieve data with extremely low latency.
- **Rich Data Structures:** Work with strings, hashes, lists, sets, sorted sets, and streams natively.
- **Caching:** Reduce load on primary databases by caching frequently accessed data.
- **Pub/Sub Messaging:** Broadcast messages between services in real time.
- **Persistence:** Optionally persist in-memory data to disk for durability.
- **Clustering:** Scale horizontally across multiple nodes for high availability.

---

## ⚡ What It Helps You Do

Backend engineers use Redis as a caching layer in front of slower relational or document databases, dramatically cutting response times.

Real-time applications like chat, leaderboards, and live notifications use Redis' pub/sub and sorted sets to handle constantly changing data.

Teams building job queues and task scheduling systems use Redis as a lightweight, fast message broker.

Session storage for web applications commonly lives in Redis, since sessions need to be read and written extremely quickly.

---

## 🚀 Why Redis Stands Out

Redis' core strength is raw speed — because data lives in memory, operations that would take milliseconds on disk-based databases happen in microseconds.

Its data structures go far beyond simple key-value pairs, letting developers implement leaderboards with sorted sets, counters with atomic increments, or real-time feeds with streams, without extra application logic.

Despite being in-memory, Redis offers configurable persistence (RDB snapshots and AOF logs), so it can be used safely for data that shouldn't be lost on restart.

---

## 🧩 More Than a Cache

Redis is often introduced as "just a cache," but it supports a much wider range of use cases:

- Key-value storage with rich data types
- Publish/subscribe messaging
- Streams for event-driven architectures
- Distributed locks and rate limiting
- Geospatial indexing and queries
- Lua scripting for atomic operations
- Cluster mode for horizontal scaling
- Modules for search, JSON, and time-series data

This versatility is why Redis frequently ends up handling caching, messaging, and real-time features all within the same infrastructure.

---

## 📦 Common Workflows

- **Application Caching:** Speed up read-heavy applications by caching database query results.
- **Session Management:** Store user sessions for fast, scalable web applications.
- **Real-Time Leaderboards:** Use sorted sets to rank scores or activity instantly.
- **Job Queues:** Power background task processing with lightweight message queues.
- **Rate Limiting:** Throttle API requests using atomic counters with expiration.
- **Pub/Sub Messaging:** Coordinate real-time updates across microservices.

---

## 💡 Tips for Getting Started

- Set appropriate expiration (TTL) on cached keys to avoid unbounded memory growth.
- Choose the right data structure for the job — sorted sets for rankings, hashes for objects, streams for events.
- Enable persistence (RDB and/or AOF) if data loss on restart isn't acceptable.
- Monitor memory usage closely, since Redis performance depends on data fitting in RAM.
- Use Redis Cluster or replicas for high availability in production environments.
- Avoid using Redis as a primary database for data requiring complex relational queries.

---

## 🧠 Who It Is Great For

Redis is ideal for backend engineers, platform teams, and architects building applications that need extremely fast reads and writes — caching layers, real-time features, and lightweight messaging.

Its combination of speed, versatile data structures, and optional persistence has made it one of the most widely deployed data stores behind modern web and mobile applications.
