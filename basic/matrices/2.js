//3x3 Square Matrix
let matrixA = [[1, 2, 3, 14], [4, 5, 6, 15], [7, 8, 9, 16]]

// console.log(matrixA[0][0]);
// console.log(matrixA[0][1]);
// console.log(matrixA[0][2]);
// console.log(matrixA[0][3]);
// console.log(matrixA[1][0]);
// console.log(matrixA[1][1]);
// console.log(matrixA[1][2]);
// console.log(matrixA[1][3]);
// console.log(matrixA[2][0]);
// console.log(matrixA[2][1]);
// console.log(matrixA[2][2]);
// console.log(matrixA[2][3]);


for (let i = 0; i < matrixA.length; i++) {
    console.log(matrixA[i]);
    for (let j = 0; j < matrixA[i].length; j++) {
        console.log(matrixA[i][j]);
        console.log(`i = ${i} and j = ${j}`)
    }
}


//Write a Program that Takes the order of Matrix, then take input elements and print them
//Enter The Number of Rows
//Enter the Number of Coloumns
//Enter Element ij
//Print The Matrix

//Note: Use Functions for Implementing Different Methods

//Addition of 2 Matrices