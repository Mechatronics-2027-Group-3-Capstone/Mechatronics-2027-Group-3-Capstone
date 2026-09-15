---
title: Week 3 — Prototyping
date: Sept 22 – Sept 28, 2026
members: Brendan Chharawala, Priya Nair, Marcus Chen
---

## Sept 23, 2026 — Marcus Chen

Integrated the HX711 load cell amplifier with the STM32.

- Calibrated against known weights (10g, 50g, 100g)
- Measured drift is under 0.5g over 10 minutes — acceptable for our use case
- Combined sensor readings into a single state machine skeleton

## Sept 25, 2026 — Brendan Chharawala

3D-printed the first revision of the rotary arm bracket.

- First print had a servo mounting hole 1mm too small — reprinted with fix
- Fits the servo horn cleanly on revision 2
- Full assembly photos added to the shared drive

## Sept 27, 2026 — Priya Nair

Drafted the wiring diagram for the full system and reviewed it with the TA
during office hours.

- TA flagged that we should add a flyback diode near the servo driver
- Updated the diagram accordingly
- Scheduled full electromechanical integration for Week 4

### Next steps

- [ ] Full system integration test
- [ ] Start drafting the mid-project progress report
