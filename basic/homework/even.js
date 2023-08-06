console.clear();

var readlinesync = require('readline-sync');


function menu(){

console.log(' choose the option \n 1. check even or odd \n 2. Exit');
var key = readlinesync.questionInt(" \nEnter you choice = ");

switch(key){
    case 1:
        var number = readlinesync.questionInt("Enter the number to check = ");
        checkEvenOdd(number);
        break;
    case 2:
        console.log(`Thank you`);
        return;
    default:
        console.log(`\nInvalid Input\n `);
        break;

        
}
menu();

}
function checkEvenOdd(number) 
{

    if (number % 2 == 0) {
        console.log('\nGiven number is even\n');
    } else {
        console.log(`\ngiven number is odd\n`);
    }

}


menu();
