"use strict";

exports.findMin = findMin;
exports.sumOddIndicesValues = sumOddIndicesValues;
exports.sumArrays = sumArrays;

//1. Which of the following are destructive array method?

//pop, push , shift , splice , reverse and sort
// others are safe


//2- Write a function findMin that takes an array as a parameter and returns the minimum value.
// Use a for .. of loop. 
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {Number} find min of end elements
 */
function findMin(arr) {

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
console.log(findMin([1, 2, 101, 45, 55, -3, 1443]));

//3- Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
//   of values on the odd indices. 
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {Array} summ of end elements
 */
function sumOddIndicesValues(arr) {

    let oddSum = 0;
    for (let i = 1; i < arr.length; i += 2) {

        oddSum = oddSum + arr[i];
    }


    return oddSum;
}

console.log(sumOddIndicesValues([1, 3, 4, 6, 4, 7, 2]));


//4- Write a function sumArrays, that takes two arrays as parameters (you can assume of same
//   length) then returns a new array by adding two array values at the corresponding indices. 
/**
 * 
 * @param {Array} arr1 is array of numbers
 * @param {Array} arr2 is array of numbers
 * @returns {Array} summ of end elements
 */
function sumArrays(arr1, arr2) {

    let sumArrays = [];

    for (let i = 0; i < arr1.length; i++) {
        sumArrays[i] = arr1[i] + arr2[i];
    }

    return sumArrays;

}

console.log(sumArrays([1,2,3,4,5] , [5,4,3,2,1]));