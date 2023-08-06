//splice
//can be used to add new items in an array
//syntax
//num.splice(position to add, no. of ele to remove, elements to be added)
console.log(`*********Splice Operation*********`);
let num = [1, 2, 36, 46, 58, 3, 4, 5, 6]
let deletedValues = num.splice(2, 3, 'Faizan');
//stores spliced out elements in deletedValues
console.log(num);// returns modified array
console.log(deletedValues);//returns spliced out elements array

console.log(`*********Slice Operation*********`);

let num1 = [1,2,3,4,5,6,7,8,9]

// this does not modify the original array
//creates a new array and stores the operated values
let sliceOperation = num1.slice(3);//starts from index 3
console.log(sliceOperation);
let sliceOperation1 = num1.slice(3,7);//starts from index 3 and ends at index 6 //does not count ending point
console.log(sliceOperation1);
