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


## Nov. 2, 2026 — Advisor Meeting — Full Group

Design review with our advisors.

- Advisors asked for analysis supporting our electrical power calculations.
- Keep the microphone and speaker in the power budget for now. They can be dropped later.
- To deal with the robot falling when unpowered, they suggested driving to a home position on startup.

## Nov. 4, 2026 — Anna Levonyan

During this session, I completed the MCU portion of the schematic in Altium Designer using the application note and datasheet.

- Added appropriate decoupling and bulk capacitors 
- Opted not to add a stable reference voltage to the analog reference pins on the MCU, since we won't be using the ADCs/DACs
- Also opted to exclude both external oscillators to simplify layout, and because they are not needed

## Nov. 4, 2026 — Full Group

Wednesday group meeting.

- Brendan emailed the advisors about the Sustainable Development scholarship deadline and ordered 3D printing filament to start test prints.
- Shabd will look at the Jetson after Thursday.
- Need to look into an E-brake later.
- Anna finished the MCU section of the lighting PCB schematic and will also do the power conversion section. Layout is starting soon.
- I2C may not be reliable over the wire length between the Jetson and the lighting board, since longer wiring adds bus capacitance and slows rise times. We decided to include both I2C and UART for robustness.
- Lighting board diameter between 60 mm and 140 mm, with a way to pass wires through and grounded mounting holes.
- Buying off-the-shelf buck converters for now.

## Nov. 6, 2026 — Full Group

Friday group meeting.

- Anna wants to order the LEDs we were considering as discrete parts so we can test them on a lab power supply first. We decided to do it.
- Brendan suggested using an LED strip with a driver board instead of a custom lighting PCB. The group will consider it.
- Not sure capacitive touch will work, but we are buying a board to try it.
- Asa to check whether Mouser stocks the motors in larger quantities.
