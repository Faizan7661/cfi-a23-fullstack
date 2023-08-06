import axios from "axios";
import readlineSync from "readline-sync";

const authAxios = axios.create({
    baseURL: `https://api.github.com/users`,
    headers: {
        Authorization: `Bearer ${"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"}`
    }
})

async function fetchUsernames() {
    try {
        let list = await authAxios.get(`https://api.github.com/users`);
            
        let promisesArray = list.data.map((ele)=>{
         
            return (authAxios.get(`https://api.github.com/users/${ele.login}`));
            // return ele.login;
           
        }) 
        
        let result = await Promise.all(promisesArray)
        result.forEach((element)=>{
                    console.log(element.data.email);
                })
        

    } catch (error) {
        console.log(`Error`);
    }
}


console.log(`---------------Git API Application---------------`);

fetchUsernames();