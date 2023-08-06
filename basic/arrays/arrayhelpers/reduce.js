//reduces the array to a single value
let arr1 = [1,2,3,4,5]
let newarr = arr1.reduce((h1,h2)=>
{
    return h1+h2;
})
console.log(newarr);