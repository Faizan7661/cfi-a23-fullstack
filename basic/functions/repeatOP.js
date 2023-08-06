var readlinesync = require('readline-sync');
function PerimeterOfSquare(x) {
    return 4 * x;
}

function AreaOfSquare(x) {
    return x * x;
}

function Menu() {
    console.log(`\nSelect the Operation to be Performed \n \n 1. Area of Square\n 2. Perimeter of Square \n 0. EXIT `);
    var key = readlinesync.questionInt(" \nEnter you choice = ");

    switch (key) {

        case 1:
        var Side = readlinesync.questionInt("\n Enter Side : ");
            SquareOperations1(Side);
            break;
        case 2:
        var Side = readlinesync.questionInt("\n Enter Side : ");

            SquareOperations2(Side);
            break;
        case 0:
            console.log('\n Thankyou');
            break;
        default:
            console.log(`Invalid Input `);
            break;


    }

    function SquareOperations1(x) {

        // var Side = readlinesync.questionInt("\n Enter Side : ");
        let area = AreaOfSquare(x);
        console.log(`Area of Square is ${area}\n`);
        Menu();


    }


    function SquareOperations2(x) {
        // var Side = readlinesync.questionInt("\n Enter Side : ");
        let perimeter = PerimeterOfSquare(x);
        console.log(`\nPerimeter of Square is ${perimeter}`);
        Menu();


    }

}

console.clear();
Menu();