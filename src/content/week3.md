---
title: Week 3 — Problem Clarification, Research, and PDP Preparation
date: Sept 28 – Oct 4, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

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
