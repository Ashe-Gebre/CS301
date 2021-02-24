           
           
           "use strict";
            const prompt= require ("prompt-sync")();
//QUESTION ONE
            const volumeInQuarts = prompt("Enter volume in quarts: ");
            const volumeLiters = volumeInQuarts * 0.94635295;

            console.log(volumeLiters);

//QUESTION TWO
       
            const distanceInkilometers = prompt("Enter  distance in Kilometers: ");
            const distanceInMiles = distanceInkilometers * 0.621371;

            console.log(distanceInMiles);

//QUESTION THREE
            const totalNumberOfBoxes = prompt("Enter total number of boxes: ");
            const boxesInEachStack = prompt("Enter number of boxes ineach stack: ");

            const numberOfStacks = Math.ceil(totalNumberOfBoxes / boxesInEachStack);
            console.log(numberOfStacks + " number of stacks");

//QUESTION FOUR
            const endingOdometerReadings = prompt("Enter ending odometer readings: ");
            const beginningOdometerReadings = prompt("Enter beginning odometer readings: ");
            const NumberGallonGasUsed = prompt("Enter the number of gallon gas used: ");

            const mileageInMilesPerGallon = ((endingOdometerReadings - beginningOdometerReadings)/NumberGallonGasUsed);
            console.log(mileageInMilesPerGallon + " miles per gallon.");
//QUESTION FIVE
            const ageOfUser = prompt("Enter your age: ");
            const maxHeartRate = 220;
            const yourMaxHeartRate = maxHeartRate - ageOfUser;
            const slowestRate = 0.65 * yourMaxHeartRate;
            const fastestRate = 0.85 * yourMaxHeartRate;
            console.log (slowestRate + " & " + fastestRate + " are your lowest & fastest rates during exercise to strengthen your heart respectively");





