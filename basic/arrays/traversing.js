// var a = [1,2,3,4,5,6,7,8,9,10];
//console.log(`${a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]}`);
// var Index = 0;

// while (Index < a.length) {
//   console.log(a[Index]);
//   Index++;
// }

// for(i=0;i=a.length;i++)
// {
//     console.log(a(i));
// }


///yaha tak mera hai iske baad class ka hai


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13];

// console.log(a.length);
//Print all these Elements in an Order

// for (var i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// var i=0;
// while (i<a.length){
//     console.log(a[i]);
//     i++;
// }

//forEach
// a.forEach(element => {
//     console.log(element);
// });

console.log(a);

//Push Adds an Element to the Last
a.push("adnan","CFI","JS");
console.log(a);

//Pop - Removes the Last Element
a.pop();
console.log(a);

//Shift & Unshift

//Shift Removes the First Element
a.shift();
console.log(a)

//Unshift Adds Element to the Beginning 
a.unshift("CFI");
console.log(a)


//Slice & Splice

// var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// var removedElements = fruits.splice(2,2);
// console.log('Remaining Fruits',fruits);
// console.log('Removed Fruits',removedElements);

//Slice
//Explore Negative in Slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(fruits);
console.log(citrus);

//Used to Reverse an Array
fruits = fruits.reverse();
console.log(fruits);


const array =new Array(10);
array.fill("Adnan");

console.log(array);