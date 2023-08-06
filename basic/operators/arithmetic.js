/* 
Arithmetic operators

1. Addition
2. subtraction 
3. multiplication
4. division
5. power **
6. modules %

*/

//variables in js

// declaring a variable

var a;
//initializing a variable
var b=1;

//= is used for assigning the value which is nothing but assiggnment operator
a = 10;

console.log(a);
// console.log(a);


//Addition
console.log(a + b);

//Subtraction
console.log(a - b);

b = 2;
//Multiplication
console.log(a * b);

//Division
console.log(a / b);

b = 3;
//Modulus
console.log(a % b);

//Power
//10 ^ 3 = 10*10*10
console.log(a ** b);


console.log("The addition of Two Number a and b is = ", a + b);
console.log("Addition is a + b = ", a + b, "\nSubtraction is a - b = ", a - b);

var str1 = "Hello ";
var str2 = "World";


console.log(str1 + str2);

console.log("Hello" + 20);

//Type Literals
console.log(`Addition is ${a + b}\nSubtraction is ${a - b}\nMuliplication is ${a * b}`);

var c;


// var x,y,z;
// var x = 1, y = 2, z = 10;

//Undefined error
console.log(c)

console.log(typeof (c));

//BODMAS

/*

Bracket open
Divison
Multiplication
Addition
Subtraction

*/