---
title: Nmap
description: Free and open-source network scanning tool for host discovery, port scanning, service detection, and network security auditing.
tags:
  - nmap
  - network-scanning
  - networking
  - security
  - port-scanning
  - open-source
  - reconnaissance
category: Networking & Security
url: https://nmap.org
image: https://upload.wikimedia.org/wikipedia/fr/7/7e/LOGO_Nmap.jpg
---

# Nmap

**Nmap** (Network Mapper) is a free and open-source tool for network discovery and security auditing. It scans networks to determine which hosts are online, what ports are open, what services are running, and often what software versions and operating systems are in use — information that's foundational to both network administration and security assessment.

Originally released in 1997, Nmap has remained a core tool in the networking and cybersecurity fields for decades, valued for its speed, flexibility, and the depth of its scripting engine.

---

## 🌟 High-Level Capabilities

- **Host Discovery:** Identify which devices are active on a network.
- **Port Scanning:** Detect open, closed, and filtered ports on target hosts.
- **Service & Version Detection:** Identify running services and their software versions.
- **OS Fingerprinting:** Infer the operating system of a target host.
- **Scripting Engine (NSE):** Automate advanced scanning and vulnerability detection tasks.
- **Output Formats:** Generate results in human-readable, XML, or grepable formats for further processing.

---

## 🔍 What It Helps You Do

Network administrators use Nmap to inventory devices on a network and verify that only expected ports and services are exposed.

Security professionals use it during penetration testing and vulnerability assessments to map out an organization's attack surface.

System administrators troubleshoot connectivity issues by confirming whether expected services are actually listening on the ports they should be.

Researchers and students use Nmap to learn how networking protocols, ports, and services work in practice.

---

## 🚀 Why Nmap Stands Out

Nmap's scanning engine is exceptionally fast and configurable, supporting everything from a quick ping sweep of a subnet to a slow, stealthy scan designed to avoid detection.

Its Nmap Scripting Engine (NSE) extends far beyond basic port scanning, with hundreds of scripts capable of detecting vulnerabilities, brute-forcing credentials (in authorized testing), and gathering detailed service information.

Being free, open-source, and cross-platform has made it a shared standard tool across networking and security teams, so scan results and terminology are widely understood.

---

## 🧩 A Comprehensive Scanning Toolkit

Nmap supports a wide range of scanning techniques and use cases:

- TCP and UDP port scanning with multiple scan types
- Host discovery across large IP ranges
- Service and version detection
- Operating system fingerprinting
- The Nmap Scripting Engine (NSE) for extended functionality
- Timing and stealth controls to manage scan aggressiveness
- Output in normal, XML, and grepable formats
- Zenmap, an official graphical front end for visual scanning

This range is why Nmap functions as both a quick diagnostic tool and a deep security assessment platform.

---

## 📦 Common Workflows

- **Network Inventory:** Discover and catalog all active devices on a network.
- **Security Auditing:** Identify exposed ports and services during vulnerability assessments.
- **Penetration Testing:** Map an attack surface as part of authorized security testing.
- **Firewall Verification:** Confirm that firewall rules are correctly blocking or allowing traffic.
- **Service Troubleshooting:** Verify that expected services are running and reachable.

---

## 💡 Tips for Getting Started

- Always ensure you have explicit authorization before scanning any network you don't own.
- Start with basic scans (`nmap <target>`) before exploring advanced timing and scripting options.
- Use `-sV` for service version detection when diagnosing what's actually running on a port.
- Explore NSE scripts relevant to your task instead of running the entire script library at once.
- Use slower timing templates on sensitive networks to avoid disrupting production systems.
- Combine Nmap output with other tools for deeper analysis of discovered services.

---

## 🧠 Who It Is Great For

Nmap is essential for network administrators, security professionals, penetration testers, and students learning networking and cybersecurity fundamentals.

Its speed, flexibility, and scripting depth have kept it a foundational tool in network security for over two decades.
