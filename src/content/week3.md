---
title: Week 3 — Problem Clarification, Research, and PDP Preparation
date: Sept 28 – Oct 4, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Sept. 28, 2026 — Full Group

Second meeting with our course advisors.

- Define criteria in terms of function, not specific sensors.
- Keep problems and solutions clearly separated.
- Don't put cost directly in the constraints, consider the market instead.
- There's a scholarship specifically for posture/sitting correction that our design might fit.
- Our scope seems reasonable for a 4th year capstone.
- Consider minimizing the 6DOF arm further as we design.
- Keep privacy in mind given the camera and mic.
- PDP marks include watching other groups' presentations and giving feedback.
- We could pitch different combinations of features across our four design options.
- No late PDP changes allowed, submission is due the Monday before.

## Sept. 30, 2026 — Full Group

Meeting to settle roles going forward and work on scholarships.

- Roles: Brendan updates logs from group and prof meetings, Shabd tracks deadlines, Anna sets meeting agendas, Asa is scribe.
- Friday snack rotation starts with Anna, next person picked each Friday.
- Split into pairs to find 1-3 scholarships each from the database, then picked the top 3 to apply to.
- Spent remaining time working on applications.
- Action item: each member researches one subsystem and brings parts/solutions to Friday's meeting.

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

## Oct. 2, 2026 — Full Group

Friday meeting to share subsystem research and plan the PDP.

- Research shared: Shabd & Asa on actuators, Brendan on sensors and compute, Anna on lighting.
- Camera mounting discussion: putting it inside the lamp shade would flash-bang the user, so we're looking at mounting it on one of the other linkages, possibly on a small gimbal with two 9g servos. Considering two cameras, a high-res one and a low-res one that could sit inside the shade.
- PDP: went through the rubric, split up tasks, and picked rehearsal dates.
- Anna's LED research: large-die SMD or COB are the only options with enough light output, both need a diffuser. Deciding between a custom SMD PCB with warm and cool LEDs or two separate COB modules. Budget around $150, though cheaper board houses are worth checking. Power draw should be under 10W. Looking at a dedicated LED driver IC. Shabd is emailing a contact about the lamp shade itself.
- Brendan's compute research: already have a Jetson Nano and a Pi Zero W, a Pi 5 8GB would be a worse fit than the Jetson if we need to buy something. The Jetson belongs to GoodLabs, which is a minor concern. Probably don't need to spend money on compute. Camera should be at least 12MP for detail, with autofocus. Camera-based tracking may not be feasible and is a back-burner feature. Mic can be a cheap ~$10 option, or $50-70 for one with beamforming and echo cancellation, likely worth the extra cost.
- Asa & Shabd's actuator research: end effector weight estimated around 350g. Motors considered are around 30 kg*cm, though Brendan's experience suggests 50-70 kg*cm is more realistic. Plan to build a MATLAB simulation to calculate joint torques with a 2x safety factor, then move to CAD. Need to talk to Paul about link lengths.
