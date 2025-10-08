// function greet() {
//     console.log('Greetings');
// }

// greet.language = 'English';
// console.log(greet.language);

// greet();

// function add(a, b) {
//     return a + b;
// }

// add.description = 'Adds two numbers';
// console.log(typeof add);
// console.log(add.description);


// reference types vs value types

// value types have a discrete value :
//  numbers, strings, booleans, null, undefined, symbol, bigint, etc
let x = 20;
let y = x;
y = 30; // X won't change! value types are immutable - they can't be changed.
console.log(x); // output 20

// reference types are everything else, including :
//  objects,arrays, functions, or anything that inherits from object 
let obj1 = { name: 'Alice', height:74 };

let obj2 = obj1; //const obj2 = Object.assign({}, obj1);
//let obj3 = { name : obj1.name, height: obj1.height } //
const boj3 = JSON.parse(JSON.stringify(obj1))
obj2.name = 'Bob';
obj3.name = "John";
console.dir(obj1); // Output: Bob
console.dir(obj2);
console.dir(obj3);

const person = {
    FirstName: "John",
    LastName: "Awesome", 

    GetFullName () {
        // "this" references the person object
        return this.FirstName + ' ' + this.LastName;
    }
}

function deepCloneObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepCloneObject(obj[key]);
    }
  }
  return clone;
}
