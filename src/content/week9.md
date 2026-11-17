---
title: Week 9 — Design Work 
date: Nov 8 – Nov 14, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Nov. 10, 2026 — Brendan Chharawala

During this session I redesigned the robot CAD.

- The previous design looked too much like an articulated dental light, and when I simulated it, its range of motion was too limited for expressive, animated movement. Limiting the number of motors to simplify animation ended up working against us.
- I also found an error in my earlier torque calculations, where I had not properly accounted for the servo loads.
- The new design has a more retro robotic look, a more fluid range of motion, and much lower joint torques. It goes from 5 to 6 motors.
- Rendered pose sheets for the full arm and for the 2-axis head to check that it can hit expressive poses like curious, shy, stretch, bow and droop.

![New CAD design](images/2026-11-10-cad-v4.png)

![Arm pose sheet](images/2026-11-10-cad-v4-poses.png)

![Head pose sheet](images/2026-11-10-cad-v4-head-poses.png)
- Collected reference designs of other robotic lamps to compare against.
- Confirmed that our Jetson Nano Dev Kit has two MIPI CSI camera connectors, so we can run two cameras.
- Received the Digikey order with the LEDs for testing and handed it off to Anna and Asa.

## Nov. 10, 2026 — Shabd

- Worked on component selection, selected base and arm camera worked with Asa to get orders.

## Nov. 11, 2026 — Anna, Asa, Brendan, Shabd

Wednesday group meeting.

- Brendan redesigned the robot CAD to be more expressive. The arm now has 6 motors instead of 5.
- Brendan and Asa want to order the motors used in the new design.
- Shabd is taking the Jetson to get started on bring-up.
- Shabd found two cameras. We are ordering them on Amazon.
- Future orders will go through Amazon because returns are free until February.

## Nov. 11, 2026 — Brendan Chharawala

Motor selection for the new CAD.

- Using the Waveshare hardware usage tables, worked out that the new design needs 4x CF12-6 servos and 2x ST3235 servos.
- Recommended ordering 2 CF12-6 and 1 ST3235 to start testing. Asa found the CF12-6 isn't reliably available on Amazon and suggested the 7.5 V ST3215 as an alternative.

## Nov. 12, 2026 — Asa Littlejohn & Anna Levonyan

During this session, we tested out various LEDs for our LED board.

- We were able to test the LP RGB LED, and both the cool white and warm white LEDs at the rated current.
- We were having issues soldering wires to the bottmom of the HP RGB LEDs, we plan to revist it using solder paste and hot air.
- The conclusions reached were: 
    - The LP RGB LEDs are quite bright and thus we can maybe ditch the expenisve HP ones for more LP ones.
    - The white LEDs are plenity bright but we feel that the warm LED isn't warm enough. 

Plan to revise the board with no HP LEDs and go from 4 to 12 LP LEDs, swap current warm white LEDs for ones with more warmth.

## Nov. 12, 2026 — Brendan Chharawala

- Looked into what it takes to meet our lighting spec: getting both saturated RGB colours and true tunable white from 2700 K to 6000 K needs RGB plus warm and cool white channels (RGBCCT / RGBWW). Either tunable white LEDs with separate RGB LEDs, or all-in-one RGBCCT LEDs, would work as long as we meet the spec.

## Nov. 13, 2026 - Shabd Gupta

- Helped Anna with FW bug, setup the Nvidia Jetson with ssh and initial boot.

## Nov. 13, 2026 - Asa Littlejohn

During this session I continued work on the LED board schematic.

- Increased number of LP RGB LEDs and remove HP RGB LEDs as was determined by testing.
- Replace white LEDs with same components with warmer and colder temp respectively.
- Also increase number of white LEDs to increase luminence.
- Do math on V_LED to make sure that chosen value won't cause drivers to dissipate too much power.
- Add a few cheap temp sensors for thermal monitoring of hot spots (LEDs, and LED drivers).

## Nov. 13, 2026 — Anna, Asa, Brendan, Shabd

Friday group meeting.

- Went over the LED test results. Currently leaning towards discrete white LEDs combined with RGB LEDs.
- Some discussion about using RGBWCW LEDs instead.
- CAD has been updated and Brendan is going to start printing parts.
