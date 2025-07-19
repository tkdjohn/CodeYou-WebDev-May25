"use strict";
let doorWithCar = -1; // Randomly place the car behind one of the doors
let choice1 = -1; // Player's first choice
let choice2 = -1; // Player's second choice

function playNow() {
    console.log("Starting game");
    document.getElementById("playField").style.display = "block";
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
    const btnStart = document.getElementById("btnStart");
    btnStart.textContent = "Play Again!"; 
    btnStart.disabled = true; // Disable the button to prevent multiple clicks
    doorWithCar = Math.floor(Math.random() * 3) + 1; // Randomly select a door for the car
    choice1 = -1; // Reset choices
    choice2 = -1; // Reset choices
    console.log(`Car is behind door ${doorWithCar}`);
    // the below has a redundant comment
    enableDoors(true); // Enable doors for the game
    clearDoorContents(); // Clear previous door contents
    document.getElementById("instructions").textContent = "Choose a door: 1, 2, or 3";
}

function enableDoors(enable) {
    const doors = document.querySelectorAll('.doors');
    doors.forEach(door => {door.disabled = !enable;});
}

function clearDoorContents() {
    const doorContents = document.querySelectorAll('.doorContent');
    doorContents.forEach(content => content.textContent = "");
}

function chooseDoor(doorNumber) {
   
    if (choice1 === -1) {
        choice1 = doorNumber; // First choice
        document.getElementById(`door${choice1}Content`).textContent = "Choice";
        console.log(`First choice is door ${choice1}`);
        document.getElementById("instructions").textContent = "You chose door " + choice1 + ". Now, let's see what's behind the other doors.";
        
        // Reveal a goat behind one of the other doors
        const otherDoors = [1, 2, 3].filter(num => num !== choice1 && num !== doorWithCar);
        const doorToReveal = otherDoors[Math.floor(Math.random() * otherDoors.length)];
        document.getElementById(`door${doorToReveal}Content`).textContent = "Goat";
        revealedDoor = document.getElementById(`btnDoor${doorToReveal}`);
        revealedDoor.disabled = true;
        revealedDoor.textContent = "Goat";
    } else {
        choice2 = doorNumber; // Second choice
        console.log(`Second choice is door ${choice2}`);
        if (choice2 === doorWithCar) {
            document.getElementById("win").style.display = "block";
        } else {
            document.getElementById("lose").style.display = "block";
        }
        document.getElementById("btnStart").disabled = false; // Enable the start button for replay
        enableDoors(false); // Disable doors after the game is over
        document.getElementById("statistics").style.display = "block";
    }

}