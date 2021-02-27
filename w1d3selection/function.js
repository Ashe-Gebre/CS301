"use strict";
const prompt = require("prompt-sync")();


//QUESTION ONE

// A & B together:

const number = +prompt("Enter a positives number: ");
let isPrime = true;

// check if number is equal to 1
function checkPrime(number) {
    if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1) {

    // looping through 2 
        
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
}
checkPrime(number);



// QUESTION TWO

//A & B- Area & Volume of cylinder 


let radius = +prompt("Enter the raduis of the cylinder: ");
let height = +prompt("Enter the height of the cylinder: ");

    function volumeOfCylinder (radius, height) {
      
        let volumeOfCylinder = ( Math.PI*radius*radius*height);
        console.log(volumeOfCylinder) ;
    }

        function areaOfCircle (radius, height) {
        let areaOfCircle = (Math.PI*radius*radius );
        console.log(areaOfCircle);
     }
areaOfCircle(radius);
volumeOfCylinder(radius, height);

// QUESTION THREE

let width = +prompt("Enter the width: ");
let depth = +prompt("Enter the depth: ");
let height = +prompt("Enter the height: ");
let sweep = +prompt("Enter the sweep: ");

function houseVolume()





//ANSWERS for questions from the reading


//1-	We can use a “default” value instead, then we can specify it using “=”.
//      Sometimes it makes sense to set default values for parameters not in the function declaration, but at a later stage, during its execution.


//2-	Using camelCase.  It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
//      The name should be descriptive of its function. It must be meaningful.
//      A function should do exactly what is suggested by its name, no more.


//3-	 Functions should be short and do exactly one thing. Functions themselves should tell what is going on. There is nothing to comment or little to comment. And the code structure is better when split. It is clear what every function does, what it takes and what it returns.
//      Functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.