import axios from "axios";
import readlineSync from "readline-sync";

async function fetchUsernames() {
    try {
        let list = await axios.get(`https://api.github.com/users`, {
            auth: {
                username: "Faizan7661",
                password: "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"
            }
        })
        let promisesArray = list.data.map((ele) => {
            return axios.get(`https://api.github.com/users/${ele.login}`, {
                auth: {
                    username: "Faizan7661",
                    password: "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"
                }
            });


        })

        let result = await Promise.all(promisesArray)
        result.forEach((element) => {
            console.log(element.data);
        })


    } catch (error) {
        console.log(`Error`);
    }
}


console.log(`---------------Git API Application---------------`);

fetchUsernames();