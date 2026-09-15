---
title: Week 1 — Kickoff & Problem Definition
date: Sept 8 – Sept 14, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan
---

## Sept 9, 2026 — Asa Littlejohn

Kicked off the capstone with the full team. We landed on our project:
**SmartToast** — an AI-connected toaster with Spotify integration. Toast
doneness and an LED "now toasting" display react to whatever song is
currently playing.

- Set up this shared design log repository
- Drafted the initial project charter
- Assigned early research areas: heating control, enclosure, Spotify API

## Sept 11, 2026 — Shabd Gupta

Researched heating element control approaches for consistent, repeatable
toast doneness.

- Compared simple bang-bang relay control vs. PID with a thermocouple
- PID looks feasible with an off-the-shelf MAX6675 thermocouple amp
- Flagged the nichrome element's thermal lag as the main tuning challenge

## Sept 13, 2026 — Anna Levonyan

Investigated the Spotify Web API to figure out what's actually possible on
a headless embedded device.

- `Get Currently Playing Track` endpoint gives track name, artist, and
  album art URL — exactly what we need
- Since a toaster has no browser/keyboard, we'll need the OAuth **device
  authorization flow** for login
- Next: request a Spotify developer app and test the auth flow manually

### Open questions

- [ ] Confirm budget ceiling with course coordinator
- [ ] Decide on heating control approach by Week 2
