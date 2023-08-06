console.clear();
let num = [98,23,43,2,1,234,54,64,32,32,12]
num.sort();
console.log(num);
//sort does not sort numerically it sorts according to the sequencing of 1,2,3,4
// for example if there are 5 numbers 
// 11,21,81,34,111
//then it keeps number 1 elements first
//then number 2 and then number 3 and so on
// 1,111,21,34,81


let compare = (a,b)=>{
    return a-b;
}
num.sort(compare);
console.log(num);
