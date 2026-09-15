---
title: Week 2 — Concept Selection
date: Sept 15 – Sept 21, 2026
members: Brendan Chharawala, Priya Nair, Marcus Chen
---

## Sept 16, 2026 — Priya Nair

Ran a weighted decision matrix comparing the two mechanical concepts from
Week 1 against cost, reliability, and build complexity.

| Criteria       | Weight | Belt-driven | Rotary arm |
| -------------- | ------ | ----------- | ---------- |
| Cost           | 0.3    | 7           | 8          |
| Reliability    | 0.4    | 8           | 6          |
| Build time     | 0.3    | 6           | 8          |
| **Weighted**   |        | **7.1**     | **7.2**    |

The two concepts scored nearly identically, so we're moving forward with the
rotary arm for its faster expected build time.

## Sept 18, 2026 — Brendan Chharawala

Produced the first CAD concept for the rotary sorting arm in Fusion 360.

> Decision: committing to a 3-position rotary arm driven by a single servo,
> with the load cell mounted at the intake station.

- Shared CAD file in the team drive
- Bill of materials draft started

## Sept 20, 2026 — Marcus Chen

Bench-tested the STM32 dev board with the IR break-beam sensor.

- Sensor reads reliably at up to 30cm
- Wrote a basic polling loop and confirmed interrupt-based reads work too
- Next: integrate load cell via HX711 amplifier
