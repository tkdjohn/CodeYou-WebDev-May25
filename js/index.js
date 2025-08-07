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
// let my_object = new Object();
// let my_object2 = new Object();
// let my_object3 = new Object();

// let numberArray = [10, 20, 30, 40, 50];
// let objectArray = [ my_object, my_object2 , my_object3, new Object() ];
// x = numberArray.pop(); // [10, 20, 30, 40 ]
// numberArray.push("100"); // [10, 20, 30, 40, 100 ]
// y = numberArray.indexOf(50);
function addNumber(number) {

  number = number ?? 0;
  number ??= 0;
  
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === number) {
      console.log(`Number ${number} already exists at index ${i}`);
    } else if (number < numberArray[i]) {
      numberArray[i] = number;
    } else {
    }
  }
  
  String.forEach((char, index ) => {
    console.log(`the charater at incex ${index} is ${char}`);
  });

  numberArray.forEach((num, index) => { 
    if (num === number) {
      console.log(`Number ${number} already exists at index ${i}`);
    } else if (number < num) {
      num = number;
    } else {
    }
  });

}




function runTestCode () {
    console.log("Running test code");
    const testString = "Hello, World!";
    console.log(findCharAtIndex(testString, 7)); // Should output "W"
    console.log(findCharAtIndex(testString, 13)); // Should output null
    console.log(findCharAtIndex(testString, -1)); // Should output null

    toggleDarkMode(); // Test dark mode toggle
    findIndexOf("green"); // Should find green at index 1
    addNumber(25); // Test adding number to array
}

// i++;
// ++i;

// i = 1;
// x = i++;// x = 1; i => 2;
// console.log(`x = ${x}, i = ${i}`); // x = 1, i = 2
// x = i; i = i + 1;

// x = ++i; // i => 2; x = 2;
// console.log(`x = ${x}, i = ${i}`); // x = 2, i = 2
// i = i + 1; x = i;

// let x = "100";
// x == 100;
// x === 100;

// let nx = null;
// let zx = nx ?? "it's null dude";
// let y = 0;

// const yorZ = (z === null || y === undefined);
// if ( x === null && yorZ) {
//   y = 0;
// } else {
//   y = 6;
// }

// let y1 = (x === null) ? 0 : 6;

