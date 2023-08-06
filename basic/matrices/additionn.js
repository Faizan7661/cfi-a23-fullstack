var readlineSync = require('readline-sync');


let numRows1 = readlineSync.questionInt("Enter the number of rows of the first matrix: ");
let numColumns1 = readlineSync.questionInt("Enter the number of columns of the first matrix: ");

// first matrix
const matrix1 = [];
for (var i = 0; i < numRows1; i++) {
    const row1 = [];
    for (var j = 0; j < numColumns1; j++) {
        var element1 = readlineSync.questionInt(`Enter element at position (${i}, ${j}) of the first matrix: `);
        row1.push(element1);
    }
    matrix1.push(row1);
}


let numRows2 = readlineSync.questionInt("Enter the number of rows of the second matrix: ");
let numColumns2 = readlineSync.questionInt("Enter the number of columns of the second matrix: ");

// second matrix
const matrix2 = [];
for (var i = 0; i < numRows2; i++) {
    const row2 = [];
    for (var j = 0; j < numColumns2; j++) {
        var element2 = readlineSync.questionInt(`Enter element at position (${i}, ${j}) of the second matrix: `);
        row2.push(element2);
    }
    matrix2.push(row2);
}
//check
if (numRows1 !== numRows2 || numColumns1 !== numColumns2) {
    console.log("Matrix addition is not possible as the matrices have different dimensions.");
} else {
    //result
    const result = [];
    for (var i = 0; i < numRows1; i++) {
        const row = [];
        for (var j = 0; j < numColumns1; j++) {
            
            var sum = matrix1[i][j] + matrix2[i][j];
            row.push(sum);
        }
        result.push(row);
    }

    console.log("Matrix Addition Result:");
    console.log(result);
}
