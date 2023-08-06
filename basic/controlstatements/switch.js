var readlineSync = require('readline-sync');


//Switch Statement
//Create a Simple Calculator for Performing Mathematic Operations
/*
1. Addition
2. Subtraction
3. Multiplication
4. Division 
5. Modulus
6. Power
7. Square Root
*/

// "readline-sync"
console.log("************** MY SIMPLE CALCULATOR ****************")
var a = readlineSync.questionInt("Please Enter the First Number : ");
var b = readlineSync.questionInt("Please Enter the Second Number : ");
console.log(`Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress % for Modules\nPress ** for power `)

var operator = readlineSync.question("Please Enter the operation you want to Perform : ");
// var operator = "*";
// var a = 10, b = 20;


switch (operator) {
    case "+":
        console.log(`Sum of 2 Numbers ${a} and ${b} is ${a + b}`);
        break;
    case "-":
        console.log(`Difference of 2 Numbers ${a} and ${b} is ${a - b}`);
        break;
    case "*":
        console.log(`Product of 2 Numbers ${a} and ${b} is ${a * b}`);
        break;
     case "%":
        console.log(`Modulas of 2 Numbers ${a} and ${b} is ${a % b}`);
        break;
    case "**":
        console.log(`power of two Numbers ${a} and ${b} is ${a ** b}`);
        break;
    default:
        console.log(`Invalid Input`);
        break;
}



/*
Area and Perimeter Calculator
Ask your User Which Shape Does he want to perform the Operation on
Valid Shapes
Square
Rectangle
Triangle (Implement Herons Formula for Calculating the Area)
Circle
Bonus Question - If the sides are Invalid Throw an Error saying Invalid Dimensions
Create a Grade Calculator and Show the Grade 
Accept Marks from The User
91-100 - Grade A
81-90 - Grade B
71-80 - Grade C
61-70 Grade D
<60 Fail
Deadline Sunday 10 P.M.
*/