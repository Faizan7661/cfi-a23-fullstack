let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//arr[i] == ele
// index = i
arr.forEach((ele, i) => {
    console.log(ele, i);
})

let newArray = arr.map((ele) => { 
   return  ele * 3 
})


// let newArray = []
// for(let i = 0;i<arr.length;i++){
//     newArray.push(arr[i]*3);
// }

console.log(newArray)