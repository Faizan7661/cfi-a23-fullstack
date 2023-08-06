const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function randomString(length){
    //logic for generating a random string
    let result = ' ';
    const charactersLength = characters.length;
    for(let i= 0 ; i< length ; i++){
        result+= characters.charAt(Math.floor(Math.random() * charactersLength));
        //result += charString[Math.floor(Math.random() * charString.length)];
        

    }
    return result;
}
// console.log(`Random string is `)
// console.log(randomString(5));

function randomNumber(digits) {
    return 500;
}

function randomNumberBetweenRange(min, max) {
    //How to Generate Random Values using Math.random from a Given number to a Maximum Number
    return 100;
}

export { randomString, randomNumber, randomNumberBetweenRange };


//math.random
//mdn pe math mein example hai katey dekho
//how to generate random string usinng math.random in just one line
//how to generate random values using math.random from a given number to maximum number
// random number between a range
//write a proram to shuffle an array using .sort()
// export default is used for importing 1 function
// export default {f1,f2,f3} =this is for exporting all functions
//......,,,,,,,,,