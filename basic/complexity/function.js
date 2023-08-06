// var readlineSync = require('readline-sync')
// var n = 1000;
// let result = 1;


// console.time()
// for (let i = 1; i <= n; i++) {
//     result *= i;
// }
// console.log(` ${n}! = ${result}`);
// console.timeEnd();

console.time()
function factorial(n) {

    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }


}
console.log(factorial(100))
console.timeEnd()