import readlineSync from 'readline-sync';
import axios from 'axios';
import chalk from 'chalk';

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


    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
    }
}

export default userLogin