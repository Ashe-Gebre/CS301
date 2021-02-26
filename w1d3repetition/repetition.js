"use strict";
const prompt = require("prompt-sync")();

//QUESTION ONE
//A) without break

    let numberA = prompt("Please enter a number to test if it is prime: ");
    let factorCount = 0;

    for (let i = 2; i < numberA; i++) {
    if (numberA % i == 0) {
        factorCount++;
    }
    }
    let isPrime = factorCount === 0;
    console.log(isPrime, "  factorCount: ", factorCount);



//B) with break
    let numberB = prompt("Please enter a number to test if it is pime: ");
    let isPrime1 = true;

    for (let i = 2; i < numberB; i++) {
    if (numberB % i == 0) {
        isPrime1 = false;
        break;
    }
    }
    console.log(isPrime);

//QUESTION TWO
   // program to find the factorial of a number

    // take input from the user
    const numberC = parseInt(prompt('Enter a positive integer: '));

    // checking if number is negative
    if (numberC < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    // if number is 0
    else if (numberC === 0) {
        console.log(`The factorial of ${numberC} is 1.`);
    }
    // if number is positive
    else {
        let fact = 1;
        for (let i = 1; i <= numberC; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${numberC} is ${fact}.`);
    }



//QUESTION FOUR
const numberD = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= numberD; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}





//QUESTION FIVE...summing digits of a given number


        let value = prompt("enter an integer value: ")
        let sum = 0;
            while (value) {
                sum += value % 10;
                value = Math.floor(value / 10);
            }

        console.log(sum);




 //QUESTION SIX

  //A)...
    let i, j;
        for(i=1; i<=5; i++)
        {
            for(j=1; j<=i; j++)
            console.log(i);
    }


// B)....
    for (let i = 1; i <= 5; i++) {
    let row= "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
    }

//C)...
    let i, j;
    for(i=5; i<= 5; i--)
    {
    for(j=1; j<=i; j++)
    console.log(i);
    }


