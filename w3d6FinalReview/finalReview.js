"use strict";
/* 1.	Write a JavaScript function isSumOfPrimesEven that takes
an array of positive integers as an argument and returns true if the 
sum of all the prime elements in the given array is even otherwise 
returns false. If the array is empty or if the array does not contain 
any prime element it should return false. */

/**
 * 
 * @param {Array} arr of pos integers
 * @returns {boolean} true if sum of all the prime elements in the given array is even
 */
function isSumOfPrimesEven(arr) {
    let sum = 0;
    for (const element of arr) {
        if (isPrime(element)) {
            sum += element;
        }
    }
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * 
 * @param {number} number is a pos integer
 * @returns {boolean} true if prime
 * this is a "stub" -- it sort of works for a quick test
 */
function isPrime(num) {

    if (num === 2) {
        return true;
    }
    if (num < 2) {
        return false;
    }
    for (let i = 3; i < num; i++) {

        if (num % i === 0) {
            return false;

        }

    }

    return true;
}
console.log("expect false: ", isSumOfPrimesEven([1, 2, 2, 3, 9]));
console.log("expect true: ", isSumOfPrimesEven([1, 2, 3, 4, 5, 6]));



/* 4.	Write a function that takes a string parameter 
and returns the middle character of the string. If string is of 
even length then function should return the middle two characters.
*/

/**
 * 
 * @param {string} str any string
 * @returns {string} the middle character
 * process - get length and divide by 2
 *  - if divisible by 2 then return middle 2 , else just the middle one
 */
function middle(str) {
    const length = str.length;
    const midpoint = Math.floor(length / 2);

    if (length % 2 === 0) {
        return str[midpoint - 1] + str[midpoint];
    } else {
        return str[midpoint];
    }
}

console.log("expect b :  ", middle("abc"));
console.log("expect bc :  ", middle("abcd"));


// 6- output------------10-------

// 7-  output------------5-------