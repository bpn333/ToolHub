---
title: Wireshark
description: Free and open-source network protocol analyzer for capturing, inspecting, and troubleshooting network traffic in real time.
tags:
  - wireshark
  - networking
  - packet-analysis
  - security
  - troubleshooting
  - open-source
  - protocol-analysis
category: Networking & Security
url: https://www.wireshark.org
image: https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg
---

# Wireshark

**Wireshark** is a free and open-source network protocol analyzer that lets you capture and inspect the traffic flowing across a network in granular detail. It decodes hundreds of protocols — from HTTP and DNS to TCP and TLS handshakes — presenting raw packets in a human-readable format that makes diagnosing network problems and security issues far more tractable.

Widely regarded as the industry-standard packet analysis tool, Wireshark is used everywhere from university networking courses to enterprise security operations centers.

---

## 🌟 High-Level Capabilities

- **Packet Capture:** Capture live traffic from wired, wireless, and virtual network interfaces.
- **Deep Protocol Inspection:** Decode hundreds of protocols down to individual packet fields.
- **Filtering:** Isolate specific traffic using a powerful display and capture filter syntax.
- **Traffic Analysis:** Follow TCP streams, reconstruct sessions, and visualize conversations.
- **Offline Analysis:** Open and analyze previously captured `.pcap` files.
- **Scripting & Extensibility:** Extend functionality with dissectors and Lua scripts.

---

## 🔍 What It Helps You Do

Network administrators use Wireshark to diagnose slow connections, packet loss, and misconfigured devices by watching traffic in real time.

Security analysts inspect captured traffic for signs of intrusion, malware command-and-control activity, or data exfiltration.

Developers debug network-facing applications by verifying the exact requests and responses being sent over the wire.

Students and educators use Wireshark to visually teach how protocols like TCP, DNS, and HTTP actually work in practice.

---

## 🚀 Why Wireshark Stands Out

Wireshark's protocol dissector library is enormous, decoding traffic for everything from common web protocols to specialized industrial and telecom protocols, and it's actively maintained by a large open-source community.

Its filtering language lets users go from a full traffic capture with millions of packets down to exactly the conversation they care about in seconds.

Because it's cross-platform and free, Wireshark has become a shared vocabulary for network troubleshooting — engineers across companies and platforms can share `.pcap` files and immediately understand each other's analysis.

---

## 🧩 A Deep Network Inspection Toolkit

Wireshark goes well beyond simply listing packets:

- Live capture across multiple interface types
- Color-coded packet lists for quick visual triage
- Detailed protocol tree breakdowns per packet
- Follow TCP/UDP/HTTP stream reconstruction
- Statistics views for endpoints, conversations, and I/O graphs
- Support for decrypting TLS traffic with session keys
- Command-line companion tool (tshark) for automation
- Custom dissectors for proprietary protocols

This depth is why Wireshark remains the reference tool for anyone needing ground-truth visibility into network behavior.

---

## 📦 Common Workflows

- **Network Troubleshooting:** Diagnose latency, packet loss, and connectivity issues.
- **Security Investigation:** Analyze suspicious traffic for signs of compromise.
- **Protocol Debugging:** Verify that applications send and receive data correctly.
- **Performance Analysis:** Identify bottlenecks using traffic statistics and I/O graphs.
- **Education:** Teach networking fundamentals through live, visual packet inspection.
- **Incident Response:** Reconstruct what happened during a security event from captured traffic.

---

## 💡 Tips for Getting Started

- Learn display filter syntax early (e.g. `http`, `tcp.port == 443`) to cut through noise quickly.
- Use "Follow TCP Stream" to reconstruct entire conversations instead of reading packet-by-packet.
- Capture only what you need using capture filters to avoid overwhelming file sizes.
- Be mindful of legal and ethical boundaries — only capture traffic you're authorized to inspect.
- Use tshark for scripted or automated packet analysis in pipelines.
- Save interesting captures as `.pcapng` files for later reference or sharing with colleagues.

---

## 🧠 Who It Is Great For

Wireshark is essential for network administrators, security analysts, penetration testers, developers, and students who need to see exactly what's happening on the wire.

Its combination of depth, protocol coverage, and zero cost has made it the standard tool for network visibility across nearly every technical field.
