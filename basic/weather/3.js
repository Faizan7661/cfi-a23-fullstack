// function fetchGithubDetails(username) {
//     axios.get('https://api.github.com/users/adnanali-in')
//         .then((res) => {
//             console.log(res.data);
//             axios.get(res.data.repos_url)
//                 .then((result) => {
//                     console.log(result.data);
//                 })
//                 .catch((error) => {
//                     console.error('Error in Repors', error);
//                 })
//         })
//         .catch((error) => {
//             console.error(error);
//         })
// }

import axios from "axios";
import readlineSync from "readline-sync";

async function fetchGithubDetails(username) {
    try {
        let response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
        let reposResponse = await axios.get(response.data.repos_url);
        console.log(reposResponse.data);
    } catch (error) {
        console.error(error);
    }
}


fetchGithubDetails("adnanali-in")