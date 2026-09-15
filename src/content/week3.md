---
title: Week 3 — Prototyping
date: Sept 22 – Sept 28, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan
---

## Sept 23, 2026 — Anna Levonyan

Got album art rendering on the LED matrix.

- Downsampled Spotify's 640x640 album art to 16x16 with simple averaging
- Polling the currently-playing endpoint every 5 seconds is enough to feel
  "live" without hitting Spotify's rate limits
- Combined the Spotify client and matrix driver into one ESP32 sketch

## Sept 25, 2026 — Shabd Gupta

Tuned the PID loop against the thermocouple readings.

- Initial gains overshot badly and scorched a test slice — tuned down
- Settled on gains that hit target doneness within +/-4 seconds across
  5 repeated runs
- Next: tie toast doneness target to the tempo of the currently playing song

## Sept 27, 2026 — Asa Littlejohn

3D-printed the first revision of the enclosure and did a full assembly
test with the heating element and matrix installed.

- LED matrix window was 2mm too small — reprinted with fix
- Reviewed the wiring diagram with the TA during office hours; added a
  flyback diode near the relay as recommended
- Full assembly photos added to the shared drive

### Next steps

- [ ] Full system integration test (heating + Spotify + display together)
- [ ] Start drafting the mid-project progress report
