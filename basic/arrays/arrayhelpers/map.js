//creates a new array by performing some operation on
//each array element

let arr = [ 23, 45, 54]

let newArr = arr.map((value)=>{
    console.log(value);
    return value + 2;
})

console.log(newArr);
