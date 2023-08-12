import readlineSync from 'readline-sync';
import axios from 'axios';
import chalk from 'chalk';

async function userRegistration() {
    try {
            console.clear();
            console.log(`
    ====================================\n
    \tRegister New User\n 
    ====================================`);
        let firstName = readlineSync.question("Enter Your First Name : ");
        while (!firstName) {
            firstName = readlineSync.question("Please Enter a Valid Name : ");
        }
        let lastName = readlineSync.question("Enter Your Last Name : ");
        while (!lastName) {
            lastName = readlineSync.question("Please Enter a Valid Name : ");
        }
        let email = readlineSync.questionEMail("Enter your Email : ");
        let mobileNumber = readlineSync.question("Enter Your mobileNumber : ");
        while (!mobileNumber) {
            mobileNumber = readlineSync.question("Please Enter a Valid Mobile Number : ");
        }
        let address = readlineSync.question("Enter your address : ");
        while (!address) {
            address = readlineSync.question("Please Enter a Valid address : ");
        }

        let password = readlineSync.question("Enter your password : ", {
            hideEchoBack: true,
        });
        let password2 = readlineSync.question("Re-Enter your password : ", {
            hideEchoBack: true,
        });
        while (password != password2) {
            console.log(chalk.red("Password Do Not Match"));
            password = readlineSync.question("Re-Enter your password : ", {
                hideEchoBack: true,
            });
            password = readlineSync.question("Confirm your password : ", {
                hideEchoBack: true,
            });
        }

        let userData = { firstName, lastName, email, mobileNumber, address, password, password2}
        console.log(userData);

        let response = await axios.post('http://172.25.222.167:3010/api/users/register',userData)
        console.log(response.data);
        console.log("User Registered Successfully");

     }
     catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
    }

   
}

export default userRegistration;

 //  catch (error) {
    //     console.error(error);
    //     console.error(chalk.red(error.response.data.error));
    // }