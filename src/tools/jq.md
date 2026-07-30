---
title: jq
description: Lightweight and flexible command-line JSON processor for slicing, filtering, mapping, and transforming JSON data.
tags:
  - jq
  - json
  - command-line
  - data-processing
  - scripting
  - open-source
category: Developer Tools
url: https://jqlang.org
image: https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg
---

# jq

**jq** is a lightweight, open-source command-line JSON processor that lets you slice, filter, map, and transform JSON data using a small but expressive query language. Often described as "`sed` for JSON," it's designed to be used directly in shell pipelines, making it one of the most common tools for working with JSON output from APIs, logs, and configuration files without writing a full script.

Because JSON has become the default data format for APIs and modern tooling, jq has become a near-essential companion for anyone working from the command line.

---

## 🌟 High-Level Capabilities

- **JSON Filtering:** Extract specific fields or values from complex JSON structures.
- **Transformation:** Reshape JSON into different structures using its query language.
- **Pretty-Printing:** Format raw, minified JSON into readable, indented output.
- **Pipelines:** Chain filters together to process data in multiple steps.
- **Scripting Integration:** Combine with `curl`, shell scripts, and CI/CD pipelines.
- **Advanced Queries:** Use functions, conditionals, and reduce operations for complex logic.

---

## 💻 What It Helps You Do

Developers use jq to quickly inspect API responses without writing a script just to read a nested JSON field.

DevOps engineers parse JSON output from cloud CLI tools (like AWS or kubectl) directly in shell scripts and automation pipelines.

Data engineers reshape and filter JSON log files before loading them into another system.

Anyone debugging an API can pipe a `curl` response straight into jq to get clean, readable output instantly.

---

## 🚀 Why jq Stands Out

jq's core strength is that it treats JSON as a first-class citizen in the shell, the same way tools like `grep`, `sed`, and `awk` treat plain text — letting JSON data flow naturally through Unix-style pipelines.

Its query language, while initially unfamiliar, is remarkably expressive: filtering, mapping, and restructuring deeply nested JSON often takes just a single line.

Being a small, dependency-free binary means jq installs easily across nearly every platform and fits naturally into lightweight scripts and CI pipelines.

---

## 🧩 A Focused but Powerful Toolkit

Despite its small footprint, jq supports a surprising range of operations:

- Field extraction and array indexing
- Filtering with conditionals and boolean logic
- Mapping and transforming arrays of objects
- Sorting, grouping, and unique-value extraction
- String interpolation and formatting
- Custom functions and reduce operations
- Raw output mode for shell-friendly results
- Reading multiple JSON documents in a stream

This makes jq capable of far more than simple field extraction — complex data reshaping is often possible in a single command.

---

## 📦 Common Workflows

- **API Debugging:** Pretty-print and filter JSON responses from `curl` requests.
- **Shell Scripting:** Extract values from JSON to use as variables in bash scripts.
- **Log Processing:** Filter and reshape structured JSON logs for analysis.
- **CI/CD Pipelines:** Parse JSON output from build tools and cloud CLIs.
- **Data Transformation:** Convert JSON structures into different shapes for downstream tools.
- **Configuration Management:** Read and modify JSON config files from the command line.

---

## 💡 Tips for Getting Started

- Start with `.` to pretty-print JSON before learning more advanced filters.
- Use `jq -r` to get raw (unquoted) string output for use in shell scripts.
- Practice with `jq 'to_entries'` and `jq 'map()'` to get comfortable transforming arrays and objects.
- Pipe multiple filters together with `|` instead of writing one long, complex expression.
- Use the online jq playground to test filters before running them in scripts.
- Reference the manual for built-in functions — many common transformations already exist.

---

## 🧠 Who It Is Great For

jq is essential for developers, DevOps engineers, data engineers, and anyone who regularly works with JSON from the command line.

Its small size, Unix-pipeline philosophy, and powerful query language have made it a default utility alongside tools like `curl` and `grep` in countless developer workflows.
