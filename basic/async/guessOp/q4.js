console.log("Hello World");

setTimeout(() => {
    console.log("I am here after 3 Seconds")
    setTimeout(() => {
        console.log("I Taking 4 seconds")
    }, 4000);
}, 3000);


setTimeout(() => {
    console.log("I am Coming After 5 Seconds")
}, 5000)

setTimeout(() => {
    console.log("When Am I Displaying?");
}, 0)

console.log("Good Morning ! Please Practice");