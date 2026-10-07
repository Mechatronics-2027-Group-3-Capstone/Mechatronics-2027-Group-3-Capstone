---
title: Week 4 — PDP Preparation & Prototyping
date: Oct 5 – Oct 11, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Oct. 6, 2026 — Anna & Asa

During this session, we began developing the prototype of the lighting PCB.

Main constraints established last week: We need three types of lighting: cool white, warm white, and RGB.

We decided to include four types of light sources on the PCB: large-die SMD cool-white LEDs, large-die SMD warm-white LEDs, large-die SMD RGB LEDs ($$$), and low-power RGB LEDs ($).

High-power RGB LEDs cost over 3× more than the low-power versions, but we are unsure whether the low-power LEDs will provide sufficient brightness. We will test both in this prototype, since datasheet specifications such as lumens and candela can be difficult to visualize.

High-power LEDs are typically tested at If = 350 mA, while low-power LEDs operate at around 20 mA.

We decided to use multi-channel LED drivers capable of supplying up to 400 mA per channel. We selected the cheapest, most readily available option that meets our requirements.

Since we want to power the prototype with no more than ~12 V, we are limiting each LED string to four LEDs.

We created an Altium Designer project for the prototype and began adding footprints and schematic symbols for our selected components.

## Oct. 7, 2026 - Asa & Shabd

Work session to begin CAD modelling of protoype

- Decided to make a prototype of the first 3 links of the device, this is because the motors at these joints will exprince the most torques.
- Currently using SolidWorks because we are familiar with it, but might switch to Fusion for full design later.
- Designed base link and platform link as well as sourced CAD for servos, bearings, and servo horn.