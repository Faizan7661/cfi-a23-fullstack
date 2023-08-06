//Post Increment Operator
//a++  => a = a + 1

var a = 10;
console.log(`Value of A before Increment - ${a}`);
console.log(`Value of A While Printing - ${a++}`);
console.log(`Value of A After Increment - ${a}`);

//Post Decrement Operator

var b = 10;
console.log(`Value of A before Decrement - ${b}`);
console.log(`Value of A While Printing - ${b--}`);
console.log(`Value of A After Decrement - ${b}`);

//Pre Increment Operator
var c = 10;
console.log(`Value of A before Increment - ${c}`);
console.log(`Value of A While Printing - ${++c}`);
console.log(`Value of A After Increment - ${c}`);



//Pre Decrement Operator
var d = 10;
console.log(`Value of A before Decrement - ${d}`);
console.log(`Value of A While Printing - ${--d}`);
console.log(`Value of A After Decrement - ${d}`);


//NOT OPERATOR ~

//   ~x = -(x+1)

console.log((~10));

/*
10 = 1010
     0101
*/

// Unary  + operator

var a = "10000";
//ParseInt Converts Strings from any Number System to Decimal
// a = parseInt(a,2);
a = +a;
console.log(typeof(a),a)
