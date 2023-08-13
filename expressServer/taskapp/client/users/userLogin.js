import readlineSync from 'readline-sync';
import axios from 'axios';
import chalk from 'chalk';
import { taskAdd, taskReplace, taskDelete, Fetch } from './taskCRUD.js'

async function userLogin() {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tLogin page\n 
   ====================================`);
        let email = readlineSync.questionEMail(`Enter Your Email Id : `)
        while (!email) {
            email = readlineSync.questionEMail(`Enter Valid Email Id to Continue : `)
        }
        let password = readlineSync.question(`Enter your Password : `, {
            hideEchoBack: true,
        });
        while (!password) {
            password = readlineSync.question(`Enter your password to Continue : `, {
                hideEchoBack: true,
            })
        }
        let response = await axios.post('http://172.25.222.167:3010/api/users/login', {
            email: email,
            password: password
        });

        console.log(response.data);
        console.log("User Logged in Successfully");
        await handlingCRUD()

    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
    }
}


async function handlingCRUD(){
    try {
        console.clear();
        console.log("===================================");
        console.log("\t OUR TODO CLI APP");
        console.log("===================================");
        console.log(`
    Press 0 to Exit
    Press 1 to Add a Task
    Press 2 to Update/Replace a Task
    Press 3 to Delete a Task
    Press 4 to Fetch toDos Of a User
    `)
        let option = readlineSync.questionInt("Please Enter your Choice : ");
        switch (option) {
            case 0:
                return console.log("EXIT");
                break;
            case 1:
                await taskAdd();
                break;
            case 2:
                await taskReplace();
                break;
            case 3:
                await taskDelete();
                break;
            case 4:
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
            await handlingCRUD();
        } else {
            console.log("Thank you for Using, Bye!")
        }
    } catch (error) {
    return res.status(401).json({error : `Unauthorized Access`})
    }
}



export default userLogin