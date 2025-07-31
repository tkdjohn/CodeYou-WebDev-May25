"use strict";

// Monty Hall Game Implementation
let doors = null;

// objects are reference types, so we can use them to store game statistics
let stats = {
  totalGames: 0,
  totalStickWins: 0,
  totalSwitchWins: 0,
  totalStickGames: 0,
  totalSwitchGames: 0,

  totalWins: () => stats.totalStickWins + stats.totalSwitchWins,
  winPercentageStick: () => (stats.totalStickWins / stats.totalStickGames) * 100 || 0,
  winPercentageSwitch: () => (stats.totalSwitchWins / stats.totalSwitchGames) * 100 || 0,
};

// and to track the game details - which we can then save to a database or use in some other way
let data = {
  firstChoice: -1,
  secondChoice: -1,
  doorWithCar: -1,

  isWin: () => this.secondChoice === this.doorWithCar,
  isStick: function () {
    return this.firstChoice === this.secondChoice;
  },
};

function playNow() {
  document.getElementById("playField").style.display = "block";

  doors = document.querySelectorAll(".doors");

  btnStart.textContent = "Play Again!";
  btnStart.disabled = true; // Disable the button to prevent multiple clicks

  data.doorNumberWithCar = Math.floor(Math.random() * 3) + 1; // Randomly select a door for the car
  data.choice1 = -1; // Reset choices
  data.choice2 = -1; // Reset choices
  console.log(`Car is behind door number ${data.doorNumberWithCar}`);

  clearDoors(); // Clear previous door contents
  instructions1.textContent = "Click on a door: 1, 2, or 3.";
  instructions2.textContent = "After you make your first choice, a goat will be revealed behind one of the other doors.";
   document.getElementById("winLose").textContent = ""; // same as winLose.textContent = "";
}

function clearDoors() {
  doors.forEach((door) => {
    door.textContent = "????";
    door.classList.remove("revealed", "car");
  });
}
function chooseDoor(doorNumber) {
  if (data.choice1 === -1) {
    makeFirstChoice(doorNumber);
  } else {
    makeSecondChoice(doorNumber);
  }
}

function makeFirstChoice(doorNumber) {
  data.choice1 = doorNumber; // First choice
  console.log(`First choice is door number ${data.choice1}`);

  // Reveal a goat behind one of the other doors
  const doorNumbers = [1, 2, 3].filter(
    (num) => num !== data.choice1 && num !== data.doorNumberWithCar
  );
  const numDoorToReveal =
    doorNumbers[Math.floor(Math.random() * doorNumbers.length)];
  instructions1.textContent = `You chose door number ${data.choice1}. A goat has been revealed behind door number ${numDoorToReveal}.`;
  instructions2.textContent =
    ` If you wish to stick with your original choice, click on door number ${data.choice1}.` +
    ` If you want to switch, click on door number ${[1, 2, 3].find(
      (num) => num !== data.choice1 && num !== numDoorToReveal
    )}`;
  const revealedDoor = document.getElementById(`door${numDoorToReveal}`);
  revealedDoor.disabled = true;
  revealedDoor.classList.add("revealed");
  revealedDoor.textContent = "Goat";
}

function makeSecondChoice(doorNumber) {
  data.choice2 = doorNumber; // Second choice
  console.log(`Second choice is door number ${data.choice2}`);

  instructions1.textContent = `The car was behind door number ${data.choice2}.`;
  stats.totalGames++;

  if (data.choice2 === data.choice1) {
    instructions2.textContent = `You stuck with your original choice of door number ${data.choice1}.`;
    stats.totalStickGames++;
    if (data.choice2 === data.doorNumberWithCar) {
      stats.totalStickWins++;
      winLose.textContent = "You win!";
    } else {
      winLose.textContent = "You lose!";
    }
  } else {
    instructions2.textContent = `You switched from door number ${data.choice1} to door number ${data.choice2}.`;
    stats.totalSwitchGames++;
    if (data.choice2 === data.doorNumberWithCar) {
      stats.totalSwitchWins++;
      winLose.textContent = "You win!";
    } else {
      winLose.textContent = "You lose!";
    }
  }

  displayStatistics();

  const doorWithCar = document.getElementById(`door${data.doorNumberWithCar}`);
  doorWithCar.textContent = "Car";
  doorWithCar.classList.add("car");
  const otherDoors = [1, 2, 3].filter((num) => num !== data.doorNumberWithCar);
  otherDoors.forEach((num) => {
    const door = document.getElementById(`door${num}`);
    door.textContent = "Goat";
    door.classList.add("revealed");
  });
  btnStart.disabled = false; // Enable the start button for replay
  document.getElementById("statistics").style.display = "block";
}

function displayStatistics() {
  document.getElementById("totalGames").textContent = stats.totalGames;
  document.getElementById("totalStickWins").textContent = stats.totalStickWins;
  document.getElementById("totalSwitchWins").textContent = stats.totalSwitchWins;
  document.getElementById("totalStickGames").textContent = stats.totalStickGames;
  document.getElementById("totalSwitchGames").textContent = stats.totalSwitchGames;
  document.getElementById("winPercentageStick").textContent =
    stats.winPercentageStick().toFixed(1) + "%";
  document.getElementById("winPercentageSwitch").textContent =
    stats.winPercentageSwitch().toFixed(1) + "%";
  document.getElementById("overallWinPercentage").textContent =
    ((stats.totalWins() / stats.totalGames) * 100 || 0).toFixed(1) + "%";
}
