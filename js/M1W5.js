"use strict"

// function isValidEmailLonger(email){
//     if (email.includes("@")) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isValidEmailShorter(email){
//     if (email.includes("@")) {
//         return true;
//     }
//     return false;
// }

// function isvalidEmailMoreReadable(email){
//     return email.includes("@") ? true : false;
// }

// function isValidEmailMostReadable(email) {
//     return email.includes("@");
// }

// const notJohnsEmail = "john@ntr.net"

// console.log(isValidEmailLonger(notJohnsEmail));
// console.log(isValidEmailShorter(notJohnsEmail));
// console.log(isvalidEmailMoreReadable(notJohnsEmail));
// console.log(isValidEmailMostReadable(notJohnsEmail));

// const alsoNotJohnsEmail = "john.ntr.net"

// console.log(isValidEmailLonger(alsoNotJohnsEmail));
// console.log(isValidEmailShorter(alsoNotJohnsEmail));
// console.log(isvalidEmailMoreReadable(alsoNotJohnsEmail));
// console.log(isValidEmailMostReadable(alsoNotJohnsEmail));

const globalScope = "global"; //mimize use of globals
function showLocalScope(){
    // {
    //     const verylocal = "verylocal";
    // }
    // console.log(verylocal);
    const localScope = "local";
    console.log(localScope);
    console.log(globalScope);
    {
        console.log(localScope);
    }
}
// showLocalScope();

function showLocalScope2(){
    // console.log(localScope);
    console.log(globalScope);
}
// showLocalScope2();


// console.log(localScope);
console.log(globalScope);

function localScopeUsedFirst() {
    const globalScope = "this is actually local";
    console.log(globalScope);
    
    {
        const globalScope = "this is actually chold local";
        console.log(globalScope);
    }
}
localScopeUsedFirst();