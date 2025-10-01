"use strict";

// traditional function declaration
function Add(num1, num2) {
    return num1 + num2;
}
var result = Add(3, 5);
console.log(result)

// single line arrow function 
const  Add2 = (num1, num2) => num1 + num2;
result = Add2(5,7);
console.log(result);

// multi line arrow function
const Add3 = (num1, num2 ) => {
    console.log(`adding ${num1} with ${num2}`);
    return num1+num2;
}
result = Add3(9,11);
console.log(result);

const myObject = {
    Property1 : "property 1",
    Property2 : "property 2",
    property3 : undefined,
    // this in a multi line arrow function in an object
    AddInAnObject: ((num1, num2) =>  {
        console.log(this);
        return num1+num2;
    } )
};
console.log(myObject);
result = myObject.AddInAnObject(11,21);
console.log(result);