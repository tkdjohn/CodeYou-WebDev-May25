"use strict";
let doorNumberWithCar = -1; // Randomly place the car behind one of the doors
let choice1 = -1; // Player's first choice
let choice2 = -1; // Player's second choice

let instructions1Element = null;
let instructions2Element = null;
let winloseElement = null;
let doors = null;
let btnStart = null;    
let totalGames = 0;
let totalStickWins = 0;
let totalSwitchWins = 0;
let totalStickGames = 0;
let totalSwitchGames = 0;

function playNow() {
    document.getElementById("playField").style.display = "block";

    instructions1Element = document.getElementById("instructions1");
    instructions2Element = document.getElementById("instructions2");
    winloseElement = document.getElementById("winLose");
    doors = document.querySelectorAll('.doors');
    btnStart = document.getElementById("btnStart");
    btnStart.textContent = "Play Again!"; 
    btnStart.disabled = true; // Disable the button to prevent multiple clicks

    doorNumberWithCar = Math.floor(Math.random() * 3) + 1; // Randomly select a door for the car
    choice1 = -1; // Reset choices
    choice2 = -1; // Reset choices
    console.log(`Car is behind door number ${doorNumberWithCar}`);
    
    clearDoors(); // Clear previous door contents
    instructions1Element.textContent = "Click on a door: 1, 2, or 3.";
    instructions2Element.textContent = "After you make your first choice, a goat will be revealed behind one of the other doors.";
    winloseElement.textContent = "";
}

function clearDoors() {
  
    doors.forEach(door => {
        door.textContent = "????";
        door.classList.remove("revealed", "car");
    });
}

function chooseDoor(doorNumber) {
    if (choice1 === -1) {
        makeFirstChoice(doorNumber);
    } else {
        makeSecondChoice(doorNumber);
    }
}
//TODO: update door button text content to show the car or goat
// save game results in local storage
// load local storage and display statistics
function makeFirstChoice(doorNumber) {
    choice1 = doorNumber; // First choice
    console.log(`First choice is door number ${choice1}`);

    // Reveal a goat behind one of the other doors
    const otherDoors = [1, 2, 3].filter(num => num !== choice1 && num !== doorNumberWithCar);
    const numDoorToReveal = otherDoors[Math.floor(Math.random() * otherDoors.length)];
    instructions1Element.textContent = `You chose door number ${choice1}. A goat has been revealed behind door number ${numDoorToReveal}.`;
    instructions2Element.textContent = ` If you wish to stick with your original choice, click on door number ${choice1}.`
        + ` If you want to switch, click on door number ${[1, 2, 3].find(num => num !== choice1 && num !== numDoorToReveal)}`;
    const revealedDoor = document.getElementById(`door${numDoorToReveal}`);
    revealedDoor.disabled = true;
    revealedDoor.classList.add("revealed");
    revealedDoor.textContent = "Goat";
}

function makeSecondChoice(doorNumber) {
    choice2 = doorNumber; // Second choice
    console.log(`Second choice is door number ${choice2}`);

    instructions1Element.textContent = `The car was behind door number ${choice2}.`;
    totalGames++;
    
    if (choice2 === choice1) {
        instructions2Element.textContent = `You stuck with your original choice of door number ${choice1}.`;
        totalStickGames++;
    } else {
        instructions2Element.textContent = `You switched from door number ${choice1} to door number ${choice2}.`;
        totalSwitchGames++;
    }

    if (choice2 === doorNumberWithCar) {
        winloseElement.textContent = "You win!";
    } else {
        winloseElement.textContent = "You lose!";
    }

    if (choice2 === doorNumberWithCar && choice1 === doorNumberWithCar) {
        totalStickWins++;
    } else if (choice2 === doorNumberWithCar && choice1 !== doorNumberWithCar) {
        totalSwitchWins++;
    }
    updateStatistics();

    const doorWithCar = document.getElementById(`door${doorNumberWithCar}`);
    doorWithCar.textContent = "Car";
    doorWithCar.classList.add("car");
    const otherDoors = [1, 2, 3].filter(num => num !== doorNumberWithCar);
    otherDoors.forEach(num => {
        const door = document.getElementById(`door${num}`);
        door.textContent = "Goat";
        door.classList.add("revealed");
    });
    btnStart.disabled = false; // Enable the start button for replay
    document.getElementById("statistics").style.display = "block";  
}
function updateStatistics() {
    const totalWins = totalStickWins + totalSwitchWins;
    const winPercentageStick = totalStickWins / totalStickGames * 100 || 0;
    const winPercentageSwitch = totalSwitchWins / totalSwitchGames * 100 || 0;

    document.getElementById("totalGames").textContent = totalGames;
    document.getElementById("totalStickWins").textContent = totalStickWins;
    document.getElementById("totalSwitchWins").textContent = totalSwitchWins;
    document.getElementById("totalStickGames").textContent = totalStickGames;
    document.getElementById("totalSwitchGames").textContent = totalSwitchGames;
    document.getElementById("winPercentageStick").textContent = winPercentageStick.toFixed(2) + "%";
    document.getElementById("winPercentageSwitch").textContent = winPercentageSwitch.toFixed(2) + "%";
}