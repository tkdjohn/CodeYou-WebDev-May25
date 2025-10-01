// media queries () - responsive
// Event Listeners 
// Array Methods - concat and slice

// About page - what to put on it
// Flexbox 
// 

function sumOfMultiples(target) {
  let sum = 0;
  if (target < 0) {
    return sum;
  } else {
    for (let i = 0; i < target; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }     
    }
  }
  return sum;
}

 
console.dir(sumOfMultiples(4));