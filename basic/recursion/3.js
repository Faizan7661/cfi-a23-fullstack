// function mul(i){
//     if (i==6){
//         return
//     }
//     else{
//         console.log(i)
//         return mul(++i)
//     }
// }
// mul(1)


function f(n) {
    if (n == 0) return;
    console.log(n % 2)
    f(Math.floor(n / 2))
}
f(15)