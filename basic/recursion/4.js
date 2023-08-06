//Factorials 

/*
0! = 1
1! = 1
2! = 2 X 1   2 x 1!
3! = 3 X 2 X 1    3 X 2!
4! = 4 X 3 X 2 X 1     4 X 3!
n!   n x (n-1)!
*/

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

//Deadline : Thursday 9 P.M.

//Write a Program to Print Fibonacci Series upto N using Recursions


//Write a Function using Recursion to Print the Octal and Ternary Equivalents of the Given Number

//Write a Program to Calculate Factorial Using Loops