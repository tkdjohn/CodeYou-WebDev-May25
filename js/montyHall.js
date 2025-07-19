"use strict";
let doorWithCar = -1; // Randomly place the car behind one of the doors
let choice1 = -1; // Player's first choice
let choice2 = -1; // Player's second choice

function playNow() {
    console.log("Starting game");
    document.getElementById("playField").style.display = "block";
    const btnStart = document.getElementById("btnStart");
    btnStart.textContent = "Play Again"; 
    btnStart.disabled = true; // Disable the button to prevent multiple clicks
    doorWithCar = Math.floor(Math.random() * 3) + 1; // Randomly select a door for the car
    choice1 = -1; // Reset choices
    choice2 = -1; // Reset choices
    console.log(`Car is behind door ${doorWithCar}`);
    // the below is a redundant comment
    enableDoors(true); // Enable doors for the game
}

function enableDoors(enable) {
    const doors = document.querySelectorAll('[id^=btnDoor]');
    doors.forEach(door => door.disabled = !enable);
}

function chooseDoor(doorNumber) {
    enableDoors(false); // Disable doors after a choice is made
    if (choice1 === -1) {
        choice1 = doorNumber; // First choice
        console.log(`First choice is door ${choice1}`);
    } else {
        choice2 = doorNumber; // Second choice
        console.log(`Second choice is door ${choice2}`);
    }
    const chosenDoor = document.getElementById(`btnDoor${doorNumber}`);
    // Logic for handling door choice goes here
    /*   Example logic:

    1. Randomly place the car behind one of the doors
    2. Keep track of the player's first choice
    3. Reveal a goat behind one of the other doors
    4. Offer the player a chance to switch their choice
    5. Determine if the player won the car or a goat
    6. Display the result to the player
    7. Reset the game for another round
    */

    document.getElementById("statistics").style.display = "block";
}