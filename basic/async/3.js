console.log("Line 1");
let a;
setTimeout(() => {
    console.log("Hello India");
    console.log(a);
    setTimeout(() => {
        console.log("Hello World");
    }, 2000)
}, 5000)

setTimeout(() => {
    a = 100;
    console.log("Some more Lines")
}, 3000);

setTimeout(() => {
    console.log(`Value of a is ${a}`);
}, 1000);

console.log("Line 2");
console.log(a);