// Time complexity is the time taken by program to get executed


/* Best Case = Omega 
Worst Case = Theta
Average Case = Big Oh

*/


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array1 = array;
array = new Array(10000);
array.fill(10);
//O(1) = because we are only printng direct given values and no loops are involved
console.log(array);


//O(n) = because we are running one loop 
for(let i = 0 ; i < array.length ; i++){
    console.log(array[i])
}


//O((m+n) which is equal to O(n) because loops are running parallely and they are not nested loops)

for(let i = 0 ; i < array.length ; i++){
    console.log(array[i])
}
for(let i = 0 ; i < array1.length ; i++){
    console.log(array1[i])
}

// O(n^2)
//nested loops
let n = 3;
let m = 3;
let arr = [[3, 2, 7], [2, 6, 8], [5, 1, 9]];
let sum = 0;


for (let i = 0; i < n; i++) {

    for (let j = 0; j < m; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);






//


//apan dekhre worst ke isliye we are using Big OhO()]
//constant [O(1)] karaye = no loops only normal operations
//O(n) = ek ich loop raha toh aata ye
//O(n^2) = nested loops rahe toh ye aata
//O(n log n) = ye dekhlena hai 
//O(n!) = function inside function inside for loop and using recursion adnan bhai bataye unka program but dont execute kyunke utti aukaat ka laptop hai nai 
//O(log n) = binary search

