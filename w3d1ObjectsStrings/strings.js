"use strict";
exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;
exports.suffix = suffix;


//QUESTION ONE..Write the code, one line for each action:


let car = {};
car = {
    make: "Toyota",
    model: "camery"
};
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.model;
console.log(car);

//QUESTION TWO..Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
//It can assume that the only properties it needs to check are name and age.
/**
 * 
 * @param {object} obj1 is an object
 * @param {object} obj2 is an object
 * @returns {boolean} true or false
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}

//isPersonEqual(obj1, obj2)

//QUESTION THREE Write the function countProperties(obj) which returns number of properties
/**
 * 
 * @param {object} obj is an object
 *
 * @returns {Number} number
 */
function countProperties(obj) {

    let countProp = 0;
    // eslint-disable-next-line no-unused-vars
    for (const key in obj) {
        countProp++;
    }

    return countProp;
}
//QUESTION FOUR...Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
//otherwise return false.
/**
 * 
 * @param {string} str is string
  * @returns {boolean} true or false
 */
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    } else {
        return false;
    }
}

//QUESTION FIVE...suffix of two strings...

/**
 * 
 * @param {string} str1 string
 * @param {string} str2 string
 * @returns {string} string
 */
function suffix(str1, str2) {
 
    let common = "";
   
    for (let i = str1.length - 1; i >= 0; i--) {
         for (let j = str2.length - 1; j >= 0; j--) {
            if (str1.slice(i) === str2.slice(j)) {
 
                common = str1[i] + common ; 
                break;
            }
 
        }
    }
 
    return common;
 
}

//QUESTION SIX...Write a function named titleCase with one parameter named s. This function returns a copy of s
//but with the first letter of each word capitalized.
/**
* 
* @param {string} sss is string
* @returns {string} string
*/
function titleCase(sss) {
    if (typeof sss !== "string") return "";
    return sss.charAt(0).toUpperCase() + sss.slice(1);
}
//QUESTION SEVEN..Write the function getAverageAge(users) that gets an array of objects with two properties
// name and age and returns the average age.
/**
* 
* @param {string} users is string
* @returns {Number} number
*/
function getAverageAge(users) {
    let age = 0;
    let average;
    for (let i = 0; i < users.length; i++) {
        age += users[i].age;
    }
    average = age / users.length;
    return average;
}

//QUESTION EIGHT..Write a function to return the sum of the first elements of the inner arrays for arrays with the
//following structure. Use a for .. of loop. 
/**
* 
* @param {arrays} arr is string
* @returns {Number} number
*/
function sumFirst(arr) {
    let sum = 0;
 
    for (let i = 0; i < arr.length; i++) {
      
        sum += arr[i][0];
    }

    return sum;
}
