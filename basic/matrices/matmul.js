import readlineSync from "readline-sync"

let numRow1 = readlineSync.questionInt(`Enter the Number of rows for 1st matrix  : `);
let numCol1 = readlineSync.questionInt(`Enter the Number of column for 1st matrix  : `);

let matrixOne = [];

for ( let i =  0 ; i < numRow1 ; i++){
    const row1 = [];
    for (let j = 0 ; j < numCol1 ; j++){
        let elements1 = readlineSync.questionInt(`Enter the Elements At Position ${i}, ${j} : `);
        row1.push(elements1)
    }

    matrixOne.push(row1);
}


let numRow2 = readlineSync.questionInt(`Enter the number of rows for 2nd matrix : `);
let numCol2 = readlineSync.questionInt(`Enter the number of columns for 2nd matrix : `);

let matrixTwo = [];

for ( let i = 0; i < numRow2 ; i++){
    const row2 =[];
    for ( let j = 0 ; j < numCol2 ; j++ ){
        let elements2 = readlineSync.questionInt(`Enter the Element at Position ${i}, ${j} : `);
        row2.push(elements2);

    }
    matrixTwo.push(row2);
}


if(numCol1 !== numRow2){
    console.log(`matrix cannot be multiplied `);
} else {
    const result =[];
    for (let i=0;i<numRow1;i++){
        result[i] = [];
        for (let j=0;j<numCol2;j++)
        {
            let sum = 0;
            for (let k=0; k< numCol1;k++){
                sum += matrixOne[i][k]* matrixTwo[k][j];

            }
            result[i][j] =  sum;

        }
    }


    console.log("Matrix Multiplication Result:");
    console.log(result);
  


}