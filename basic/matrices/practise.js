import readlineSync from 'readline-sync'

let numRow1 = readlineSync.questionInt(`Enter the Number of Rows for  1St matrix = `);
let numCol1 = readlineSync.questionInt(`Enter the Number of Columns for  1St matrix = `);

let m1 =[];

for(let i = 0; i < numRow1 ; i++ ){
    const r1 =[];
    for(let j =0; j < numCol1 ; j++){
        let el =readlineSync.questionInt(`Enter Elements at ${i} ${j} = `)
        r1.push(el);
    }
    m1.push(r1);
}

let numRow2 = readlineSync.questionInt(`Enter the Number of Rows for  1St matrix = `);
let numCol2 = readlineSync.questionInt(`Enter the Number of Columns for  1St matrix = `);

let m2 =[];

for(let i = 0; i < numRow2 ; i++ ){
    const r2 =[];
    for(let j =0; j < numCol2 ; j++){
        let e2 =readlineSync.questionInt(`Enter Elements at ${i} ${j} = `)
        r2.push(e2);
    }
    m2.push(r2);
}

// try { numCol1 === numRow2;
    
// } catch (error) {
    
//     console.log('Error While Multiplying Matrices', error.message)
    
// }

if(numCol1 != numRow2){
    console.log(`Matrix multiplication is not Allowed as No.columns(m1) !== No.Rows(m2)`);
} else{
    const result = [];
    for(let i = 0; i < numRow1 ; i++){
        result[i]= [];
        for(let j = 0; j < numCol2 ; j++){
            let sum = 0;
            for(let k = 0 ; k < numCol1 ; k++){
                sum += m1[i][k] * m2[k][j];
            }
            result [i][j] = sum ;
        }

    }

    console.log("Matrix Multiplication Result:");
    console.log(result);
}

