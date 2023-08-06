var obj = {
    a: 1,
    b: 2,
    c: "Hello World",
    d: [11, 22, 33, 44, 55],
    e: {
        key1: "Name",
        key2: "key"
    },
    f: true,
    g: [100, 200, 400, {
        fruits: "apple",
        vegetable: "brinjal"
    }, 1000]
}

/*


Object Syntax 
{
    key : value
}

*/
console.log(obj.g[3].vegetable)
console.log(obj.d[2]);
console.log(obj.e.key2);


//It Prints all the Keys in an Array Format
console.log(Object.keys(obj));

//It Prints all the Values in an Array Format
console.log(Object.values(obj));

//FOR IN LOOP