"use strict";

function findCharAtIndex (str, index) {
    if (index < 0 || index >= str.length) {
        return null; // Return null for out-of-bounds index
    }
    return str.charAt(index);
    const numbers = [1, 2, 3];

    var myobject = {
        name: "John",
        age: 30,
        city: "New York"
    };
    return numbers[index];
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


var pi = someotherVariable ?? 3.14; // Using nullish coalescing operator


const something = myNull ?? "Default Value";