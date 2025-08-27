
// From standup:
//  - event listener (syntax)
//  - talk about not being 100% all the time 
//      or more correctly 100% one day isn't the same as 100% another day, 
//      and 100% means 100% of what you are capable of, not 100% of your time.
//  - ideas to practice - codewars??  
//      I learned to code by taking others code and modifying to do things I wanted
//  - getting familiar with Dom (next wee!)   

// ==== > Truthy/Falsy Values < ====

//https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy
const thiss = true;
const that = false
const isThisTruthy = thiss && that;
const value = 11
const stringValue = "11"
let itIsNull = null

const thisIsAlwaysFalse = false
thisIsAlwaysFalse = 1
if (thisIsAlwaysFalse === false) {

}

// ==== > Adding, Removing, and Finding elements in Arrays  < ====


// ==== > Object Literals  < ====

const myObject = {
    property1: "value1",
    property2: 123,
    method1: function() {
        console.log("This is a method.");
    }
};
// Each property consists of a key (which can be a string, a number, or an identifier)
//  and a corresponding value (which can be any valid JavaScript data type, including
//  other objects or functions).

console.dir( myObject );
console.dir ( myObject.entries() );
console.dir ( myObject.keys() );
console.dir ( myObject.values() );

// Properties and methods can be accessed using dot notation (object.property) or 
// bracket notation (object['property']).
const valueOfProperty1 = myObject.property1;
//// Cool thing about bracket notation is that you can control the property selected 
////     dynamically:
var thePropertyIWant="property2";
const showProperty1Instead = false;
if (showProperty1Instead){
    thePropertyIWant = "property1";
}
var valueOfPropertyIWant = myObject[thePropertyIWant];
console.dir(valueOfProperty1)
console.dir(valueOfPropertyIWant);


