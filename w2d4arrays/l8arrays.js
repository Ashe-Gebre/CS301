"use strict";

exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.filterRange = filterRange;
exports.filterPalindromes = filterPalindromes;
exports.matrixAddition = matrixAddition;


//QUESTION ONE
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} summ of end elements
 */
function addends(arr){
    const endsSum = arr[0] + arr[arr.length -1];
    return endsSum;
}

//QUESTION TWO
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} get middle number
 */
function getMiddle(arr) {
      if(arr.length % 2 == 1){
        return arr[(arr.length-1)/2];
    }else{
        return (arr[(arr.length/2)] + arr[(arr.length/2 -1)])/2;
    }
}

//QUESTION THREE
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {Array} get left rotated array
 */
function rotateLeft(arr) { 
    arr.push(arr.shift()); 
    return arr; 
  }

  

//QUESTION FOUR
/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {Array} get right rotated array
 */
function rotateRight(arr) {
    arr.unshift(arr.pop());
        return arr;
    }


//QUESTION FIVE
/**
 * 
 * @param {Array} arr is array of numbers
 * @param {number} nnn is array of numbers
 * @returns {Array} get n times right rotated array
 */
function rotateNRight(arr, nnn) {
    for (var i = 0; i < nnn; i++) {
        arr.unshift(arr.pop());
    }
}

//QUESTION SIX




//QUESTION SEVEN

/**
 * 
 * @param {Array} arr is array of numbers
 * @param {number} aaa is array of numbers
 * @param {number} bbb is array of numbers
 * @returns {Array} get array
 */
function filterRange(arr, aaa, bbb) {

for(let i=0; i<arr.length; i++) {

return arr[i] >= aaa && arr[i] <= bbb;
}

}


//QUESTION EIGHT

/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {boolean} gets true or false
*/
function filterPalindromes(arr){
  var result=[];
  for(var i=0;i<arr.length;i++){
      result.push(arr[i]==reverse(arr[i]));
  }
  return result;
}
/**
 * 
 * @param {string} sss is array of numbers
 * @returns {string} gets string
*/
function reverse(sss){
    return sss.split("").reverse().join("");
}



//QUESTION NINE
/**
 * @param {Array} aaa is array of numbers
 * @param {Array} bbb is array of numbers
 * @returns {Array} gets array
 */
function matrixAddition(aaa, bbb) {
    var ccc = [];
    for (var i = 0; i < Math.max(aaa.length, bbb.length); i++) {
      ccc.push((aaa[i] || 0) + (bbb[i] || 0));
    }
    return ccc;
}