var readlineSync = require('readline-sync');

function greatestof3(x,y,z){
    if (a > b && a > c) {
        console.log("A is Greatest");
    } else if (b > a && b > c) {
        console.log("B is Greatest");
    } else {
        console.log("C is Greatest");
    }
}


var a = readlineSync.questionInt("Enter A : ");
var b = readlineSync.questionInt("Enter B : ");
var c = readlineSync.questionInt("Enter C : ");

// console.log();
greatestof3(a,b,c)