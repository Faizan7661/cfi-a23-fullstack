import axios from "axios";
import readlineSync from "readline-sync";

// const authAxios = axios.create({
//     baseURL: `https://api.github.com`,
//     headers: {
//         Authorization: `Bearer ${"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"}`
//     }
// })

async function fetchUsernames() {
    try {
        // let list = await authAxios.get(`https://api.github.com/users`);
        let list = await axios.get(`https://api.github.com/users`, {
            auth: {
                username: "ibrahimzaman",
                password: "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"
            }
        })
        // for (let i = 0; i < list.data.length; i++) {
        //     fetchGitDetils(list.data[i].login);
        // }
        // console.log(list.data)
        let promisesArray = list.data.map((ele) => {
            // console.log
            return axios.get(`https://api.github.com/users/${ele.login}`, {
                auth: {
                    username: "ibrahimzaman",
                    password: "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"
                }
            });

            // return ele.login
            // console.log(ele)
        })
        // console.log(promisesArray);
        // Promise.all(promisesArray)
        // .then((ele)=> {
        //     ele.forEach((element)=>{
        //         console.log(element.data);
        //     })
        //     // console.log(ele);
        // }).catch((error)=>{
        //     console.error(error);
        // })
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