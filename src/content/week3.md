---
title: Week 3 — Problem Clarification, Research, and PDP Preparation
date: Sept 28 – Oct 4, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Sept. 30, 2026 — Asa, Shabd

Meeting to discuss torques and actuation for the device.

- Some preliminary calculations were done to estimate the end effector weight.
- Brief look into possible motors to consider.
- Decided to meet again the next day to come up with a plan to calculate joint torques.

## Oct. 1, 2026 — Asa, Shabd

Building on previous days meeting to come up with plan to calculate joint torques.

- Decided to use Matlab robotics system toolbox to simulate robot for the purpose of torque selection.
- Wrote a matlab script that uses the toolbox to calculate worst case joint torques under static and dynamic configurations.
- Tried implementing the parameters for a potential set of motors we were specing.
- Agreed next steps are to start working on CAD next week to get better idea of link length and inertia.

## Oct. 1, 2026 — Anna

The objective of this session was to develop 2–3 lighting options for the robot. We want it to be able to produce either warm white or cool white lighting, depending on the use case, and potentially coloured lighting to increase expressiveness.

I investigated different LED technologies and the role of the diffuser. A diffuser spreads light from the LED source to create a larger, more uniform light, but reduces brightness.

THT / indicator SMD LEDs: Low power and brightness; would require many LEDs to create a lamp-like source and likely produce a clunky appearance. Not ideal.

Large-die SMD LEDs: Commonly used in LED strips and available in multiple colours/colour temperatures. Would require a custom PCB with multiple LEDs and a separate diffuser.

COB LEDs: Multiple LED dies mounted directly onto a substrate, creating a compact, continuous light source. Similar approach to the Apple ELEGNT project. Likely does not require a custom LED PCB, but still requires a custom diffuser.

Design Options:

- Custom SMD LED PCB containing independently controlled warm and cool LEDs.
- Two COB LED modules (warm + cool) inside the lamp head.

Next Steps:
I'll be looking into prototyping both options and compare brightness, uniformity, appearance, size, heat, cost, and ease of integration. I'm going to suggest that Asa and myself develop a quick SMD LED PCB, while a commercial COB module will be purchased for testing. Will proceed if the group approves the ~$150 budget identified, although cheaper PCB manufacturing/shipping options should be investigated.

The diffuser material and geometry are still TBD and will require experimentation.
