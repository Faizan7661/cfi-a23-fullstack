import axios, { all } from "axios";
const authAxios = axios.create({
    baseURL: `https://api.github.com/users`,
    headers: {
        Authorization: `Bearer ${"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"}`
    }
})

async function allMembersData(){
    try {
        const loginDetails = await authAxios.get(`https://api.github.com/users`);
        const promiseArray1 = loginDetails.data.map((element)=>{
            return authAxios.get(`https://api.github.com/users/${element.login}`)

        })

    let result = await Promise.all(promiseArray1)
    result.forEach((element1 =>{
        console.log(`**************************************************`)
        console.log(`Name               : `,element1.data.name);
        console.log(`Followers          : `,element1.data.followers);
        console.log(`Following          : `,element1.data.following);
        console.log(`Bio                : `,element1.data.bio);
        console.log(`Email              : `,element1.data.email);
        console.log(`**************************************************`)

    }))

    } catch (error) {
    
        console.error("Error While Fetching data : ",error.message);
        return null;
        
    }
}

allMembersData();