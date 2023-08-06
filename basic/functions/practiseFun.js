var readlineSync = require('readline-sync');

var a = readlineSync.questionInt(`Enter the value of A = `);
var b = readlineSync.questionInt(`Enter the value of B = `);
var c = readlineSync.questionInt(`Enter the value of c = `);


function addthreenumbers(x,y,z){
    return x+y+z;
}

var add = addthreenumbers(a,b,c);

console.log(add);

