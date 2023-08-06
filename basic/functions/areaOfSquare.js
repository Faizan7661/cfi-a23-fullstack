var readlineSync = require('readline-sync');

function areaofRectangle(x, y) {
    var product = multiplyTwoNumber(x, y);
    return product;
}

function perimeterofRectangle(x, y) {
    //Function is Calling Another Function
    var result = 2 * (addTwoNumbers(x, y))
    return result;
}


function addTwoNumbers(x, y) {
    return x + y;
}

function multiplyTwoNumber(x, y) {
    return x * y;
}


function displayMenu() {
    // console.clear();
    console.log(`1. To Calculate Area\n0. to Exit `)
    var key = readlineSync.questionInt("Enter your Choice : ");

switch (key) {
    case 1:
        rectangleOperations();
        break;
    case 0:
        console.log("Thanks for Using the Application");
        break;
    default:
        console.log("Invalid Input");
        break;
}


}



function rectangleOperations() {
    var a = readlineSync.questionInt("Enter Length : ");
    var b = readlineSync.questionInt("Enter Breadth : ");
    var area = areaofRectangle(a, b);
    var perimeter = perimeterofRectangle(a, b);
    console.log(`Area of Rectangle is ${area}\nPerimeter of Rectangle is ${perimeter}`);
    displayMenu();
}
console.clear();
displayMenu();