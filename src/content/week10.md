---
title: Week 10 — Design Work 
date: Nov 15 – Nov 21, 2026
members: Asa Littlejohn, Shabd Gupta, Anna Levonyan, Brendan Chharawala
---

## Nov. 15, 2026 — Anna Levonyan

During this session, I began working on the power section of the board.

- Using Asa's power calculations, I determined that 14V may be a more suitable value for the LED string voltage to ensure that the maximum power dissapation spec of the white LED drivers is not exceeded. 
- I selected a 14V and 3.3V buck converter for the board. 
- I calculated the appropriate inductor and output capacitor values for the buck based on ripple current and other specifications, and added them to the schematic.

## Nov. 16, 2026 - Asa Littlejohn

During this session, I made some changes on the LED section of the board and did some layout calculations.

- I implemented Anna's suggestion of dropping the LED voltage to 14V by re-arranging the RGB led strings.
- I added the requiref components to acompany this change to the schematic.
- I did some math regarding how to arrange the LEDs on the board with the goal of determining the minimum diffuser distance.
    - Found that circular pattern will probably work best, but will need to iron exact circular diameter with some help from Brendan.

## Nov. 17, 2020 - Asa Littlejohn

During this session, I worked on prototyping the capctive touch sensor.

- I used thin metal sheets of Aluminium and Stainless-Steel from the EMC.
- I connected them via wires to the capacitive touch sensor and wrote some code to test the device.
- I found the device would be able to detect the touch, but it requires some tuning and would benefit from an additional source of feedback (probably motor load).

## Nov. 19, 2020 - Asa Littlejohn and Shabd Gupta

 During this session, We briefly checked the effects of LEDs light on the camera.

 - We took the camera we plan to use in the lamp shade housing and placed a couple of LEDs under it.
 - Looking at the camera feed on a computer we saw there was only a minor increase in brightness in the feed.
 - We concluded for now that this shouldn't be an issue but a more conclusive test with the board will be needed.

 ## Nov. 19, 2020 - Asa Littlejohn and Anna Levonyan

 During this session, We began the layout of our lighting PCB.

 - We first workedout rough dimensions for the board and rough componenet placement.
 - We also had a discussion about LED placement strategies and came to an agreement about a 2 circle alternating pattern.
 - Began the placement in Altium but decided to split up the placement based on what schematics we have done.   
