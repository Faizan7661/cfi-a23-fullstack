let object = {};
let object2 = new Object();

console.log(object, object2)

let userData = {
    name: "Adnan Ali Khan",
    age: 21,
    country: "IN",
    email: "adnan@code.in",
    mobileNumber: "+918247026579",
    gender: "male",
    "auth-token" : "adsjandkjhnadkhkjhjh"
}

console.log(userData.name);
console.log(userData.mobileNumber);
console.log(userData['gender']);
console.log(userData["auth-token"])

var keyname = "maths"

var cardDeck = {
    1 : "Ace",
    11 : "Jack",
    12 : "King",
    13 : "Queen",
    game : "Blackjack",
    [keyname] : "99%"
}


console.log(cardDeck[10-2+5])
console.log(cardDeck);
console.log(cardDeck[keyname]);
cardDeck.newValue = "This is a New Value";
console.log(cardDeck);