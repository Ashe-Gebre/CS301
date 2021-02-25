"use strict";

const prompt= require ("prompt-sync")();

// const weather = prompt("Enter the waether: ");

// if (weather==="rainy") {
//     console.log ("Get an umbrella");
// } else {
//     console.log ("enjoy");
// };

// const guess = Number(prompt("Enter the waether: "));

// if (guess === 7) {
//     console.log ("Bingo");
// } else {
//     console.log ("Try again");
// };


const age= Number(prompt("Enter age: "));

if (age <= 0) {
    console.log ("Enter a valid age");

} else  if (age>0 && age<=14) {
    console.log ("You cant drive yet");


} else  if (age>=15 && age<=18) {
    console.log ("You can drive under supervision");
    
} else {
    console.log ("You can drive");
};
        
let number = Number(prompt("please enter a number between 1 and 5, inclusive: "));
switch (number) {
    case 1:
    console.log ("One");
    break;
    case 2:
    console.log ("Two");
    break;
    case 3:
    console.log ("Three");
    break;
    case 4:
    console.log ("Four");
    break;
    case 5:
    console.log ("Five");
    break;
    
    
  }