"use strict"; //ashenafi

exports.power = power;
exports.reverse = reverse;
exports.countDigits = countDigits;

/*
Write recursive functions to 
count the digits of a given number
reverse a given string. 
calculate the power of any base
Write your own recursive logic. Do not use existing methods like reverse or length property.
*/
//1- count the digits of a given number
/**
* 
* @param {Number} num1 is number
* @returns {Number} counted number output
*/
function countDigits(num1) {
     if (num1 < 10) {
        return 1;
    } else {
        return 1 + countDigits(num1 / 10);
    }
}


//2- reverse a given string. 
/**
* 
* @param {string} str is string
* @returns {string} string
*/
function reverse(str) {
    if (str === "") {
        return "";

    } else {
        return reverse(str.substr(1)) + str.charAt(0);

    }
}
//3- calculate the power of any base
/**
* 
* @param {Number} num1 is number
* @param {Number} num2 is number
* @returns {Number} number
*/
function power(num1, num2) {
    if (num2 == 1) {
        return num1;
    } else {
        return num1 * power(num1, num2 - 1);
    }
}

