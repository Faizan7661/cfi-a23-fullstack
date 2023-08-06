//Greatest of 3 Numbers


var a = 100000, b = 20000, c = 3000;
// if (a > b) {
//     if (a > c) {
//         console.log("A is Greatest");
//     }else{
//         console.log("C is Greatest");
//     }
// } else if (b > a) {
//     if (b > c) {
//         console.log("B is Greatest");
//     }else{
//         console.log("C is Greatest");
//     }
// } else {
//     console.log("C is Greatest");
// }

//2nd Approach
// if (a > b) {
//     if (a > c) {
//         console.log("A is Greatest");
//     }
// } else if (b > a) {
//     if (b > c) {
//         console.log("B is Greatest");
//     }
// }
// console.log("C is Great est");


//3rd Approach

if (a > b && a > c) {
    console.log("A is Greatest");
} else if (b > a && b > c) {
    console.log("B is Greatest");
} else {
    console.log("C is Greatest");
}

//Ternary Approach