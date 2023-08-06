var readlineSync = require('readline-sync');

// function areaofRectangle(x,y){
//     var product = multiplyTwoNumber(x,y);
//     return product;
// }

var areaofRectangle = (x,y)=>{
    var product = multiplyTwoNumber(x,y);
    return product;
}

console.log(areaofRectangle);



function perimeterofRectangle(x,y){
    //Function is Calling Another Function
    var result = 2 * (addTwoNumbers(x,y))
    return result;
}


function addTwoNumbers(x, y) {
    return x + y;
}

function multiplyTwoNumber(x,y){
    return x * y;
}

var a = readlineSync.questionInt("Enter Length : ");
var b =readlineSync.questionInt("Enter Breadth : ");

var area = areaofRectangle(a,b);
var perimeter = perimeterofRectangle(a,b);

console.log(`Area of Rectangle is ${area}\nPerimeter of Rectangle is ${perimeter}`);