"use strict";

function findCharAtIndex (str, index) {
    if (index < 0 || index >= str.length) {
        return null; // Return null for out-of-bounds index
    }
    return str.charAt(index);
}

console.log(findCharAtIndex("Hello, World!", 7)); // Output: "W"
console.log(findCharAtIndex("Hello, World!", 13)); // Output: null  
console.log(findCharAtIndex("Hello, World!", -1)); // Output: null  

function toggleDarkMode() {
    console.log("Toggling dark mode");
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    const mode = isDarkMode ? "Dark Mode" : "Light Mode";
    
    btnToggleDarkMode.textContent = `Switch to ${mode === "Dark Mode" ? "Light Mode" : "Dark Mode"}`;
    console.log(`Switched to ${mode}`);
}

// examples 

var pi = someotherVariable ?? 3.14; // Using nullish coalescing operator

const something = myNull ?? "Default Value";

let myarray = ["red", "green", "blue", "yellow"];
function findIndexOf(color) {
  for (let i = 0; i < myarray.length; i++) {
    // console.log(`Element at index ${i} is ${myarray[i]}`);
    let value = myarray[i];
    if (value === color) {
      console.log(`Found ${color} at index ${i}`);
      return i; // Return the index of the color
    }
  }
  console.log(`${color} not found in the array`);
  return -1; // Return -1 if the color is not found
}

let numberArray = [10, 20, 30, 40, 50];
function addNumber(number) {
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === number) {
      console.log(`Number ${number} already exists at index ${i}`);
    } else if (number < numberArray[i]) {
      numberArray[i] = number;
    } else {
    }
  }
}