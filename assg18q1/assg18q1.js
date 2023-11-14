//Explain the usage of ternary operator with syntax and write a program to check whether the number is even
//or odd using the ternary operator.

// Ternary operator

// These operators require three operands. In javascript, there is one operator that falls under this category-the conditional operator.

// example

// Importing prompt
const prompt=require("prompt-sync")({sigint:true});

const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}