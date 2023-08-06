//Asynchronous Programming

/*
1. Function Call Back
2. Promise
3. Async Await
4. Generators
*/

console.log("Line 1");

setTimeout(() => {
    console.log("Hello India");
    setTimeout(() => {
        console.log("Hello World");
    }, 2000)
}, 5000)

setTimeout(() => {
    console.log("Some more Lines")
}, 3000);


console.log("Line 2");