"use strict";
const prompt= require ("prompt-sync")();

//QUESTION ONE
const weather= prompt("Enter the weather : ");

if (weather === "hot") {
    console.log ("The footwear is sandals" );

} else if (weather === "rain") {
    console.log ("The footwear is galoshes");


} else if (weather === "snow") {
    console.log ("The footwear is boots");
    
} else {
    console.log ("The footwear is sneakers");
};


//QUESTION TWO
const studentName= prompt("Enter the student name : ");
const numberOfCompletedCredit= prompt("Enter number of completed credit: ");

if (numberOfCompletedCredit > 0 && numberOfCompletedCredit < 30) {
    console.log( studentName + " Freshman");
} else if (numberOfCompletedCredit >= 30 && numberOfCompletedCredit < 60) {
    console.log( studentName + " Sophomore");
}else if (numberOfCompletedCredit >= 60 && numberOfCompletedCredit < 90) {
    console.log( studentName + " Junior");
}else if (numberOfCompletedCredit >= 90 ) {
    console.log( studentName + " Senior");
} else {
    console.log("Invalid input");

}
    
//QUESTION THREE


if (costOfHouse > 0 && costOfHouse < 5000) {
    console.log( "The downpayment is: " + (0.05 * costOfHouse));
} else if (costOfHouse  >= 50000 && costOfHouse  < 100000) {
    console.log("The downpayment is: " + (1000 + 0.10 * (costOfHouse-50000)));
}else if (costOfHouse  >= 100000 && costOfHouse  < 200000) {
    console.log("The downpayment is: " + (2000 + 0.15 * (costOfHouse-50000)));
}else if (costOfHouse  >= 200000 ) {
    console.log("The downpayment is: " + (5000 + 0.10 * (costOfHouse-50000)));
} else {
    console.log("Invalid input");
}



//QUESTION FOUR


// DEFINING TABLE and the JS CODE

//Defining table
//**** The Input -  borrower status , borrower's number of books over due.

//**** The Process - picking the borrower status ( either Student, Faculty, or Other) ,  computing the number of books over due for a given status.

//**** The OutPut - loan duration in weeks

//The code...
const borrowerStatus= prompt("Enter borrower status , Student, Faculty or Other? : ");
const borrowersNumberOfBooksOverDue= Number(prompt("Enter borrower's number of books overdue: "));

if(borrowerStatus==="Student") {
        if(borrowersNumberOfBooksOverDue===0) {
            console.log ("Loan duration in weeks is: 6 " );
        } else if (borrowersNumberOfBooksOverDue >0 && borrowersNumberOfBooksOverDue < 3) {
            console.log ("Loan duration in weeks is: 4 " )
        } else if (borrowersNumberOfBooksOverDue >= 3) {
            console.log ("Loan duration in weeks is: 2 " )
        }
} else if (borrowerStatus==="Faculty") {
        if(borrowersNumberOfBooksOverDue===0) {
            console.log ("Loan duration in weeks is: 12" );
        } else if (borrowersNumberOfBooksOverDue >0 && borrowersNumberOfBooksOverDue < 3) {
            console.log ("Loan duration in weeks is: 10 " )
        } else if (borrowersNumberOfBooksOverDue >= 3) {
            console.log ("Loan duration in weeks is: 8 " )
        }
} else if (borrowerStatus==="Other") {
        if(borrowersNumberOfBooksOverDue===0) {
            console.log ("Loan duration in weeks is: 4" );
        } else if (borrowersNumberOfBooksOverDue >0 && borrowersNumberOfBooksOverDue < 3) {
            console.log ("Loan duration in weeks is: 3 " )
        } else if (borrowersNumberOfBooksOverDue >= 3) {
            console.log ("Loan duration in weeks is: 2 " )
        }

} else { console.log("Invalid input");

}


//QUESTION FIVE