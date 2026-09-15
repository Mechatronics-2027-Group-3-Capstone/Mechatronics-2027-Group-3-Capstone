---
title: Week 2 — Concept Selection
date: Sept 15 – Sept 21, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan
---

## Sept 16, 2026 — Shabd Gupta

Ran a weighted decision matrix comparing the two heating control approaches
from Week 1 against cost, consistency, and build complexity.

| Criteria       | Weight | Bang-bang relay | PID + thermocouple |
| -------------- | ------ | ---------------- | ------------------- |
| Cost           | 0.3    | 8                | 6                    |
| Consistency    | 0.4    | 5                | 9                    |
| Build time     | 0.3    | 8                | 6                    |
| **Weighted**   |        | **6.8**          | **7.2**              |

PID wins on consistency by a wide enough margin to justify the extra build
time — toast doneness needs to be repeatable for the demo. Moving forward
with PID + MAX6675 thermocouple.

## Sept 18, 2026 — Anna Levonyan

Got the Spotify device authorization flow working end-to-end from a
terminal script standing in for the toaster's firmware.

> Decision: the toaster will show a QR code on first boot linking to the
> Spotify device-login page, then poll for a token — no keyboard needed.

- Successfully pulled currently-playing track + album art URL after login
- Confirmed token refresh works so the toaster stays logged in long-term
- Next: get album art rendering on the LED matrix

## Sept 20, 2026 — Asa Littlejohn

Produced the first CAD concept for the toaster enclosure in Fusion 360.

- Front-facing 16x16 LED matrix window for the "now toasting" album art
- Bill of materials draft started (element, matrix, ESP32, thermocouple)
- Shared CAD file in the team drive
