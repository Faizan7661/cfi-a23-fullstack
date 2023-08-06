//Recursion
//A function that calls itself is a Call Recursion

function recursion(a) {
    // console.log(`This is Value of a -- ${a--}`)
    if (a == 0) return 0;
    return recursion(--a);
}

let a = 5;

console.log(recursion(a));
//recursion(100)
//recursion(100)


//Function