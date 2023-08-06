var a = 10, b = 20;

console.log(a > b);                                                 //false
console.log(30 < 40);                                               //true
console.log(30 <= 30);                                              //true
console.log(40 < 40);                                               //false
console.log(40 < (15 * 3))                                         //true


console.log("100" == (10 ** 2))                                   //true
console.log("100" === (10 ** 2))                                 //false

var c = "1000";
console.log(typeof (c));                                         //string


console.log(c < 100);                                        //false


console.log(100 != (5 * 20))                                 //false
console.log("100" !== (5 * 20))                             //true

console.log("ABC" == "abc");                                //false

console.log(true > false)                                  //true 1>0
console.log(false > true)                                  //false 0!>1
console.log("" == 0)                                       //true
console.log(null == 0);                                    //false
console.log(undefined == 0);                              //false

console.log("" === 0);                                   //false

var a = "ten", b = 10;

console.log(a + b);                                      //ten10

console.log(200 > 100 > 50);                          //false ye samajh nahi aaya



var a = 5, b = -3, c = -6
console.log("Start");                                        //start
console.log(c < b < c)                                       //false(-6 < -3 < -6)
console.log(c < b < a)                                       //true(-6 < -3 < 5)
console.log(c > b < a)                                       //true(-6 > -3 < 5)
console.log(a > b < c)                                       //false(5 > -3 < -6)
console.log(b < a < c)                                       //false(-3 < 5 < -6)
console.log(c < c < c)                                       //false(-6 < -6 < -6)

console.log("acb" > "abc");                                    //true