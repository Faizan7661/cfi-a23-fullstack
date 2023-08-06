var readlineSync = require('readline-sync');

var marks = readlineSync.questionInt("Enter your Marks : ");

console.log("91-100 - Grade A/n 81-90 - Grade B/n 71-80 - Grade C\n 61-70 Grade D/n <60 Fail");
switch (marks / 10) 

{
    case "91-100":
        console.log(" Your Grade is A ");
        break;
    case "81-90":
        console.log(" Your Grade is B ");
        break;
    case "71-80":
        console.log(" Your Grade is C ");
        break;
    case "61-70":
        console.log(" Your Grade is D ");
        break;
    default:
        console.log("failed");
        break;
}