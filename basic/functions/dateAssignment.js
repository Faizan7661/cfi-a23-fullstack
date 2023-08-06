var readlineSync = require('readline-sync');

var date = readlineSync.question("Enter Date : ");

// let date = '15/06/2023';
let newdate = date.split('/');

let convertedDate = newdate[1] + '-' + newdate[0] + '-' + newdate[2];

console.log(convertedDate); 
