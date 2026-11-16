---
title: Week 8 — Design Work 
date: Nov 1 – Nov 7, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Nov. 1, 2026 — Anna Levonyan

During this session, I selected the MCU and pinout for the lighting board.

- Chose the STM32G071CBT6 because it is ultimately the simplest, most inexpensive STM32 that has enough GPIOs for our application, plus some headroom. We are familiar with STM32s, and I own the debugger tool for it, so it was the natural choice.
- Also decided to use hardware PWMs instead of software PWMs because they are more accurate and don't consume CPU time. Selected pins that support hardware PWM for these signals.
- Used the STM32CubeIDE to select the I2C pins and other pins for the rest of the board.

## Nov. 1, 2026 — Asa Littlejohn

During this session I made a block diagram for the electrical system and calcualted some power specs.

- Calcualted power specs based on worst case loads for devices on the lamp.
- Used this information to roughly plan expected DC voltage rails for device, check needed by Anna.
- Compiled this information into a block diagram which shows power and signal behaviour of the electrical system.


## Nov. 1, 2026 — Brendan Chharawala

- Made a one-page infographic for the Posture and Seating scholarship application, using CAD renders. It shows how Ella mirrors a user's slouch and then rises to prompt them to sit up, aimed at wheelchair users and anyone who sits for long periods, along with a row of expressive poses from the CAD.

![Posture and Seating infographic](images/2026-11-01-infographic.png)

- Dicussion to clarify Asa's questions for the electrical block diagram: the camera will connect to the Jetson over either 4-lane MIPI CSI or USB 3.2, and the current design has 5 servos, with 3 large ones in the arm and 2 small ones inside the head.

## Nov. 2, 2026 — Advisor Meeting — Anna, Asa, Brendan, Shabd

Design review with our advisors.

- Advisors asked for analysis supporting our electrical power calculations.
- Keep the microphone and speaker in the power budget for now. They can be dropped later.
- To deal with the robot falling when unpowered, they suggested driving to a home position on startup.
- They asked that we include more individual work in our logs.

## Nov. 2, 2026 — Brendan Chharawala
I put together a CAD review deck for the advisor meeting covering the v2 design:

- Envelope: 604 mm max reach, 719 mm max height, 200 mm base diameter, 2.7 kg CAD mass, and a 139 mm centre of gravity height in the neutral pose.
- Five axes: turntable ±135°, shoulder −65°/+30°, elbow −100°/+60°, and a 2-axis head (±30° each) driven by two servos through pushrods and a ball joint. Upper link 220 mm, forearm 225 mm.
- Base stack: printed shell, aluminum deck and a steel base plate, with the Jetson and camera inside. The turntable uses a thrust bearing and a radial bearing.
- Open issues flagged for review: the shoulder servo needs about 31.1 kg·cm at its limits versus 20 kg·cm rated, the head servos need about 2.0 versus 1.8 kg·cm, and the head passes below the desk at the joint limits.

I also gave suggestions after reviewing the Jetson power plan in the electrical block diagram.

- The draft diagram had the Jetson on a 19 V rail. Confirmed our board is the original Jetson Nano Dev Kit, which takes 5 V. The 19 V input is for the Jetson Orin Nano, so the rail was changed to 5 V.
- Agreed the Jetson should get its own dedicated rail. On a previous robot I've worked on, the Jetson reset under a poor supply, which we fixed with extra bulk capacitance and an off-the-shelf buck converter. I suggested that we should do the same here. 
- Brought the Jetson so the team could check the power input and connectors directly.



![CAD review: envelope](images/2026-11-02-cad-review-envelope.png)

![CAD review: joint ranges](images/2026-11-02-cad-review-axes.png)

## Nov. 4, 2026 — Anna Levonyan

During this session, I completed the MCU portion of the schematic in Altium Designer using the application note and datasheet.

- Added appropriate decoupling and bulk capacitors 
- Opted not to add a stable reference voltage to the analog reference pins on the MCU, since we won't be using the ADCs/DACs
- Also opted to exclude both external oscillators to simplify layout, and because they are not needed

## Nov. 4, 2026 — Anna, Asa, Brendan, Shabd

Wednesday group meeting.

- Brendan emailed the advisors about the Sustainable Development scholarship deadline and ordered 3D printing filament to start test prints.
- Shabd will look at the Jetson after Thursday.
- Need to look into an E-brake later.
- Anna finished the MCU section of the lighting PCB schematic and will also do the power conversion section. Layout is starting soon.
- I2C may not be reliable over the wire length between the Jetson and the lighting board, since longer wiring adds bus capacitance and slows rise times. We decided to include both I2C and UART for robustness.
- Lighting board diameter between 60 mm and 140 mm, with a way to pass wires through and grounded mounting holes.
- Buying off-the-shelf buck converters for now.


## Nov. 6, 2026 — Anna, Asa, Brendan, Shabd

Friday group meeting.

- Anna wants to order the LEDs we were considering as discrete parts so we can test them on a lab power supply first. We decided to do it.
- Brendan suggested using an LED strip with a driver board instead of a custom lighting PCB. The group will consider it.
- Not sure capacitive touch will work, but we are buying a board to try it.
- Asa to check whether Mouser stocks the motors in larger quantities.

## Nov. 6, 2026 — Brendan Chharawala

- Set up a shared finances spreadsheet to track project spending against our budget.
- Found a low-cost TTP223B capacitive touch module as an option for testing touch sensing on the lamp. Sent it to Asa for further research and investigation.
