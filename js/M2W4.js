// hoisting - automatically moves *some* of the code to the top of the file
//  - all functions get hoisted
//  - var gets hoisted - but don't use it 
//      - makes code confusing 
//      - and only initializes variable to undefined
//   - but not things defined with const & let 
// 
// array map
// this keyword



// console.log(myVar);
var myVar = 57;
//myfunc(); // works just fine since MyFunc is declared with function and therefore is hoisted
function myFunc() {
     console.log("Hello all!");
    }
// myFunc2(); // will throw an error since myFunc2 is declared with let and is not hoisted
let myFunc2 = ( stringToPrint = "Hello Everyone") => {
    console.log(stringToPrint);
};

// myFunc2();
// myFunc2("some other string");

const person = {
    FirstName: "John",
    LastName: "Awesome", 

    GetFullName () {
        // "this" references the person object
        return this.FirstName + ' ' + this.LastName;
    }
}

// console.log(person.FirstName);
// // "this" references the global object that js magically adds for you
// console.log(this.FirstName);
// console.log(person.GetFullName())

// array.map()

// const numbers = [1, 2, 3, 4];

// Double each number in the array
// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });
// console.log("doubled: " + doubledNumbers); // Output: [2, 4, 6, 8]
// console.log("original: "+ numbers);      // Output: [1, 2, 3, 4] (original array is unchanged)
// function addOne(num) {
//     return num+1;
// }
// const addedOne = numbers.map(addOne);
// console.log("add one: " +addedOne);


const arr = ["string one", "string two", "string three", "tired of typing string"]
function appendIndexToStringArray(arr) {
  return arr.map(function(str, index) {
    return str +' the index is:'+ index;
  });
}

console.log(appendIndexToStringArray(arr));