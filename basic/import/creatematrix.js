import readlineSync from "readline-sync";

function createMatrix(rows, cols) {
    var mainarray = [];
    for (var i = 0; i < rows; i++) {
        var subArray = [];
        for (var j = 0; j < cols; j++) {
            var number = readlineSync.questionInt(`Enter number for places ${i}, ${j} : `);
            subArray.push(number);
        }
        mainarray.push(subArray);
    }
    return mainarray;
}

export default createMatrix;