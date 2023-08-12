import readlineSync from "readline-sync";
import userRegistration from "./users/userRegister.js";
import userLogin from "./users/userLogin.js";
import { taskAdd, taskReplace,taskDelete,Fetch } from "./users/taskCRUD.js";



async function displayMenu() {
    try {
        console.clear();
        console.log("===================================");
        console.log("\t OUR TODO CLI APP");
        console.log("===================================");
        console.log(`
    Press 0 to Exit
    Press 1 To Create a User
    Press 2 to Login
    Press 3 to Add a Task
    Press 4 to Update/Replace a Task
    Press 5 to Delete a Task
    Press 6 to Fetch toDos Of a User
    `)
        let option = readlineSync.questionInt("Please Enter your Choice : ");
        switch (option) {
            case 0:
                return console.log("EXIT");
                break;
            case 1:
                await userRegistration();
                break;
            case 2:
                await userLogin();
                break;
            case 3:
                await taskAdd();
                break;
            case 4:
                await taskReplace();
                break;
            case 5:
                await taskDelete();
                break;
            case 6:
                await Fetch();
                break;
            default:
                console.log("Invalid Option");
        }
        let shouldContinue = readlineSync.question(
            "Do you want to continue ? (Y/n) : "
        );
        if (
            shouldContinue === "y" ||
            shouldContinue === "Y" ||
            shouldContinue === "yes"
        ) {
            displayMenu();
        } else {
            console.log("Thank you for Using, Bye!")
        }
    } catch (error) {
        console.error(error);
    }
}

displayMenu();