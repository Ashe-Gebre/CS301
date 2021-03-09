"use strict";

exports.reverse2String = reverse2String;
exports.ssReverse = ssReverse;
exports.merge = merge;
exports.enhancedIncludes = enhancedIncludes;
exports.isPalindrome = isPalindrome;
exports.isArrayEqual = isArrayEqual;


//Question one isArrayEqual function
/**
 * 
 * @param {Array} firstArray is array of numbers
 * @param {Array} secondArray is array of numbers
 * @returns {boolean} summ of end elements
 */
function isArrayEqual(firstArray, secondArray) {

 if(firstArray.length !== secondArray.length) return false;

for(let i=0; i<firstArray.length; i++) {
    if(firstArray[i] !==secondArray[i])
    return false;
}
return true;
}

//QUESTION TWO
/**
 * 
 * @param {Array} array is array
 * @returns {boolean} true or false
 */
function isPalindrome(array) {

    let OriginalArray = array.slice();
      let reversed = [];
  
      while (array.length) {
  
          reversed.push(array.pop());
  
      }
  
  
      let result = isArrayEqual(OriginalArray, reversed);
  
      return result;
  
    }
// QUESTION THREE


/**
 * 
 * @param {Array} arr is array 
  * @returns {string} string 
 */
function reverse2String(arr) {
  let reversed = arr.reverse();
  return  reversed.join("_");
}


//QUESTION FOUR
/**
 * @param {Array} arr is array 
 * @param {string} val is array 
  * @returns {Array} array
  *  */
function enhancedIncludes(arr, val) {
   
    let contained = arr.includes(val);
    let firstIndex = arr.indexOf(val);
    let lastIndex = arr.lastIndexOf(val);
    let result = [contained,firstIndex, lastIndex];
    return result;
}
//QUESTION FIVE
/**
 * 
 * @param {Array} arr is array 
 * @returns {Array} array
 */
function ssReverse(arr) {
    let copy = arr.slice();
    let reversed = copy.splice(0,copy.length,copy.reverse());
  
    return reversed;
  }
  
  //QUESTION SIX
/**
 * 
 * @param {Array} arr1 is array 
 * @param {Array} arr2 is array 
 * @returns {Array} array
 */
 function merge(arr1, arr2) {
    const arr = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            arr.push(arr1.shift());
        } else {
            arr.push(arr2.shift());
        }
    }
    return [...arr, ...arr1, ...arr2];
 }
 console.log(merge([1,5,9], [1,2,3,5,6,8]));