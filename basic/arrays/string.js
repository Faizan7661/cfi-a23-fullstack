let a = "ADNAN ALI KHAN";
let date = "28-06-2023";

console.log(a, typeof (a));
//SubString

//String to Array
a = a.split(" ");
date = date.split("-");
console.log(date);
console.log(a);

//Array to String
a = a.join(" ")
console.log(a);

b = "join";
a= a.concat(b);

console.log(a)



//CONVERT THIS DATE FROM DD/MM/YYYY to MM-DD-YYYY
//Input - 13/06/2023 -> 06-13-2023