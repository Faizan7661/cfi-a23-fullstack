import readline from "readline-sync";
import creatematrix from "./creatematrix.js";

var rows = readline.questionInt("Enter the number of rows: ");
var cols = readline.questionInt("Enter the number of columns: ");

console.log(`Enter numbers for first matrix : `);
var mat1 = creatematrix(rows, cols);
console.log(`Enter numbers for second matrix : `);
var mat2 = creatematrix(rows, cols);

function add2mats(mat1, mat2) {
    var res = [];
    for (var k = 0; k < mat1.length; k++) {
        var subres = [];
        for (var l = 0; l < mat1.length; l++) {
            subres.push(mat1[k][l] + mat2[k][l]);
        }
        res.push(subres);
    }
    return res;
}

function printResult(res) {
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length; j++) {
            console.log(res[i][j]);
        }
    }
}

var res = add2mats(mat1, mat2);
console.log(`Resultant of two matrices`);
printResult(res);