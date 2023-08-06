var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let prime = [];

for (let i = 0; i < array.length; i++) {
    if (isprime(array[i])) {
        prime.push(array[i]);
    }
}

function isprime(numbertocheck) {
    var count = 0;
    if (numbertocheck == 0 || numbertocheck == 1) {
        return false;
    } else {
        for (let i = 2; i < numbertocheck; i++) {
            if (numbertocheck % i === 0) {
                count++;
            }
        }
        if (count <= 2) {
            return true;
        } else if (count > 2) {
            return false;
        }
    }
}

console.log(prime); 
