//-- FUNCTION EXPRESSION ASSIGNMENT

"use strict"

//QUESTION FOUR ...GCD

let greatestCommonDivisor=function gcd(number1, number2){

    if(number2==0) {return number1;}

    else {
      let ramainder = number1 % number2; 
      return gcd(number2, ramainder);
    }
}

console.log(greatestCommonDivisor(18, 12));

//QUESTION FIVE and SIX ...LCM from GCD function

let leastCommonMultiple = function lcm(a, b){
    let result= Math.abs(a*b)/greatestCommonDivisor(a, b);
    return result;
}

console.log(leastCommonMultiple(12, 18));





//QUESTION SEVEN ...compute function and with operand call back function;
const compute = function compute(add, a , b) {
    return add(a,b);
}

let add = function add(a, b) 
{ return a + b };

console.log(compute(add, 2, 3));


  //Refactor to pass add logic as an anonymous function

const compute1 = function compute(add, a , b) {
return add1(a,b);
}

let add1 = function(a, b) 
        { return a + b };

console.log(compute(add1, 3, 4));

  //Refactor to pass add logic as an arrow function. 

  let add2 = (a, b) => a + b;
  console.log(add2(4, 5));



  
  //FROM READING QUESTIONS

  //Q4---
     /*Function decaration gives more freedom in how to organize our code, 
        because we can call such functions before they are declared.

       That’s also better for readability. Function Declarations are more “eye-catching”.

        But if a Function Declaration does not suit us for some reason, 
        or we need a conditional declaration then Function Expression should be used. */


  //Q5---
    /* It is true In JavaScript, functions are not only syntax but also values, which means they can be assigned to variables, stored in the properties of objects 
    or the elements of arrays, passed as arguments to functions, and so on.
     for example ket say :  
                  function sum(a,b) {
                      return a +b
                  }
    The above definition creates a new function object and assigns it to the variable 'sum'. 
    The name of a function is really immaterial; it is simply the name of a variable that refers to the function object. 
    The function can be assigned to another variable and still work the same way.
    They can also be declared in any place in the script.
    */