
var readlineSync = require('readline-sync');

function addTwoNumbers(x, y) {
    return x + y;
}

var a = readlineSync.questionInt("Enter A : ");
var b = readlineSync.questionInt("Enter B : ");
let sum = addTwoNumbers(a, b);
console.log(sum);