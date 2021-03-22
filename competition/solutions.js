"use strict";
// eslint-disable-next-line require-jsdoc


//ASHE GROUP---smart group lol
//Ashenafi
//Connor
//Ghana
//Henok


exports.divisibleSumPairs = divisibleSumPairs;
exports.mostFrequentSight = mostFrequentSight;
exports.countSocksPairs = countSocksPairs;
exports.computeHeight = computeHeight;
exports.computeCharges = computeCharges;
exports.findMinDistance = findMinDistance;

//Q1
/**
* 
* @param {Number} count is number
* @returns {Number} counted number output
*/
function divisibleSumPairs(arr, k) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {


            if ((arr[i] + arr[j]) % k == 0 && i < j)
                count++;

        }

    }
    return count;
}


//Q2
/**
* 
* @param {Number} count is number
* @returns {Array} counted number output
*/
function mostFrequentSight(array) {
    for (const value of array) {

        const absValue = Math.abs(value);

        if (array[absValue - 1] < 0) {
            return absValue;
        }

        array[absValue - 1] *= -1;
    }
    return -1;
}


//Q3---
/**
* 
* @param {Array} arr is array
* @returns {Number} counted number output
*/
function countSocksPairs(arr) {
    let numberOfPairs = 0;

    for (let i = 0; i < arr.length - 1; i++)
    {
        let countSocksToTheRight = 0;

        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[i] == arr[j])
            {
                countSocksToTheRight++;
            }
        }
        if (countSocksToTheRight % 2 != 0)
        {
            numberOfPairs++;
        }

    } return numberOfPairs
}

//4 
// eslint-disable-next-line require-jsd
function computeHeight(height, cycle)
{
     let no;
         cycle = 1;
         height = 1;
         
        
        while (cycle <= no){
          if(cycle % 2 !== 0 ){
            height *= 2*no;
            height--
          }else{
            height++;
          }
          cycle++
    
        
        return height;
    }      
}


//5-
// eslint-disable-next-line require-jsd
function computeCharges(array) {
    let max1 = 0;
    let max2 = 0;
    let average1 = 0;
    let average2 = 0;
    let custId1;
    let custId2;
    let custId;
    let charges;
    for ({ custId, charges } of array) {

        if (custId === 1) {
            max1 = getMax(charges);
            average1 = getAverage(charges);
            custId1 = custId;
        }

        else if (custId === 2) {
            max2 = getMax(charges);
            average2 = getAverage(charges);
            custId2 = custId;
        }

    }
    return [{ average: average1, custId: custId1, maximum: max1 }, { average: average2, custId: custId2, maximum: max2 }];
};

function getAverage(arr) {
    let total = 0;
    let average = 0;
    for (const el of arr) {
        total = total + el;
    }
    average = total / arr.length;
    return average;
}

function getMax(arr) {
    const max = Math.max(...arr);
    return max;
    }



//Q 6
// eslint-disable-next-line require-jsd
function findMinDistance(arr) {
    const dups = findDuplicates(arr);
    return dups;
}

function findDuplicates(array) {
    let minSecondIndex = array.length;

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const valueToCompare = array[j];
            if (valueToCompare === value) {
                minSecondIndex = Math.min(minSecondIndex, j);
            }
        }
    }
    if (minSecondIndex === array.length) return -1;

    return array[minSecondIndex];
}




