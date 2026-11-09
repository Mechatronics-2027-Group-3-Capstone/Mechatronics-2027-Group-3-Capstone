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


## Nov. 4, 2026 — Anna Levonyan

During this session, I completed the MCU portion of the schematic in Altium Designer using the application note and datasheet.

- Added appropriate decoupling and bulk capacitors 
- Opted not to add a stable reference voltage to the analog reference pins on the MCU, since we won't be using the ADCs/DACs
- Also opted to exclude both external oscillators to simplify layout, and because they are not needed