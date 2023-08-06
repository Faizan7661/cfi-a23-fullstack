var readlineSync = require('readline-sync');

var numRows = readlineSync.questionInt(`Enter number of rows : `);
var numColumns = readlineSync.questionInt(`Enter number of columns : `);

let matrix = [];

for(i =0 ; i < numRows ; i++){
    const row = [];
    for(j=0 ; j < numColumns ; j++){
        
        let elements = readlineSync.questionInt(`Enter Elements at position (${i} , ${j}) : `);
        row.push(elements);

    }

    matrix.push(row);

}

console.log("Matrix:");

for (let i =0 ;  i < matrix.length ; i++){
    for (let j=0 ; j < matrix[i].length ; j++){

        console.log(matrix[i][j]);
        
    }
}