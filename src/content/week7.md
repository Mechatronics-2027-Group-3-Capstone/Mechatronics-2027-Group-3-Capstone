---
title: Week 7 — Design Work 
date: Oct 25 – Oct 31, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Oct. 28, 2026 - Full Group

Wednesday group meeting.

- Posture and Seating scholarship needs to be sent by Nov. 1.
- Asa to email advisors about the scholarship reference letter.
- Not many design updates this week since everyone is busy.
- Using an Arduino for motor control. Jetson Nano will be powered through the barrel jack.
- Brendan to bring the Jetson on Friday.
- Prepping for a design review with the advisors.
- Group dinner postponed indefinitely.

## Oct. 30, 2026 — Asa Littlejohn

During this session I worked on the Lighting PCB for the Lamp.

- I added all the required connections to the LED drivers for the LEDs used on the board.
- Speced out passive components to make sure the LED drivers function properly.
- Speced out an alternative LED driver for the Low Power RGB LEDs as recommended by Anna. 

## Oct. 30, 2026 - Full Group

Friday group meeting.

Power distribution:

- Started figuring out the voltage rails we need.
- Lighting: about 15 V, could be lowered if needed.
- Jetson: 5 V, 4 A.
- Motors: 6 to 12 V (typically 12 V), 2.7 A max, 190 mA no-load.
- Still need numbers for the Arduino, camera, microphone, and speaker. Can pick generic parts and assume their specs for now.

Hardware and action items:

- Brendan taking over Jetson bring-up for now since Shabd is busy.
- Brendan to buy an SD card (about $30), a power supply, and 3D printing filament. Motors still need to be discussed.
- Thinking of using Waveshare bus servos. Probably buying two at 30 kg*cm for now.
- Asa to look into capacitive touch sensing and whether it is feasible.
- Brendan to clean up the CAD.
- Plan to send out the lighting PCB by Nov. 14 and have it assembled by the end of November.

Scholarships:

- Posture and Seating to be submitted by Nov. 1 once we hear back from the advisors.
- Remaining 2 scholarships for this term split between Brendan and Shabd, aiming for the next 1 to 2 weeks.

Advisor meeting on Monday:

- Planning to show CAD, the electrical architecture, and a software overview.
