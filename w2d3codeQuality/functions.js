"use strict";
const prompt = require("prompt-sync")();


//QUESTION ONE
// A & B together:

// const number = +prompt("Enter a positive number: ");
let isPrime = true;
/**
 * check prime number
 * @param {number} number number.
 * @returns {boolean} boolean.
 */
function checkPrime(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (number > 1) {

       
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

    else {
        console.log("The number is not a prime number.");
    }
}
checkPrime(37);
checkPrime(77);



// QUESTION TWO
//A & B- Area & Volume of cylinder 


// let radius = +prompt("Enter the raduis of the cylinder: ");
// // eslint-disable-next-line no-unused-vars
// let height = +prompt("Enter the height of the cylinder: ");

/**
 * calculate volume a house
 * @param {number} radius number.
 * @param {number} height number.
 
 * @returns {number} volume of cylinder.
 */
function volumeOfCylinder(radius, height) {

    let volumeOfCylinder = (Math.PI * radius * radius * height);
    console.log(volumeOfCylinder);
}
/**
 * calculate volume a house
 * @param {number} radius number.
 * @param {number} height number.
 
 * @returns {number} area of circle.
 */
function areaOfCircle(radius) {
    let areaOfCircle = (Math.PI * radius * radius);
    console.log(areaOfCircle);
}

areaOfCircle(1);
volumeOfCylinder(1, 1);



//QUESTION THREE

/**
 * calculate volume a house
 * @param {number} width number.
 * @param {number} height number.
 * @param {number} depth number.
 * @param {number} sweep number.
 * @returns {number} houseVolume lev + rev.
 */
function houseVolume(width, height, depth, sweep) {
    const lev = livingVolume(width, height, depth); //break here
    const rev = roofVolume(sweep, width, depth);
    return lev + rev;
}
/**
 * calculate volume a house
 * @param {number} width number.
 * @param {number} height number.
 * @param {number} depth number.
 * @returns {number} living volume.
 */
function livingVolume(width, height, depth) {
    return width * height * depth;
}

/**
 * calculate volume a house
 * @param {number} sweep number.
 * @param {number} width number.
 * @param {number} depth number.
 * @returns {number} rev.
 */
function roofVolume(sweep, width, depth) {
    const rev = triangleArea(sweep, sweep, width) * depth;
    return rev;
}


/**
 * calculate volume a house
 * @param {number} sideA number.
 * @param {number} sideB number.
 * @param {number} sideC number.
 * @returns {number} result.
 */
function triangleArea(sideA, sideB, sideC) {
    const sweep = (sideA + sideB + sideC) / 2;
    const product = sweep * (sweep - sideA) * (sweep - sideB) * (sweep - sideC);
    const result = Math.sqrt(product);

    return result;
}

console.log("expect 2080", houseVolume(16, 10, 10, 10));
//roof:  8 * 6 = 48, * 10 = 480
// living 10*10*16 = 1600
//tot 2080

exports.checkPrime;
exports.houseVolume;
exports.volumeOfCylinder;
exports.areaOfCircle;


