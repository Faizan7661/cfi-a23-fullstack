import axios from "axios";
import readlineSync from "readline-sync";

async function fetchGithubDetails(username) {
    try {
        let response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function fetchingrepos(repos) {
    try {
        let Repositories = await axios.get(repos);
        return Repositories.data;
    } catch (error) {
        console.error(error);
    }
}



function mainmenu() {
    const username = readlineSync.question(`Enter username: `);
    fetchGithubDetails(username)
        .then(responsedata => {
            if (responsedata) {
                console.log(`\n-------------------------User Details------------------------`);
                console.log(`1. Name                : `, responsedata.name);
                console.log(`2. Number Of Followers : `, responsedata.followers);
                console.log(`3. Number Of Following : `, responsedata.following);
                const maxLength = 80;
                const splitBio =
                    responsedata.bio !== null
                        ? responsedata.bio.length > maxLength
                            ? `${responsedata.bio.substring(0, maxLength)}\n\t\t\t${responsedata.bio.substring( maxLength )}`
                            : responsedata.bio : 'Not found';
                console.log(`4. Bio                 : `, splitBio);
                console.log(`5. Location            : `, responsedata.location !== null ? responsedata.location : 'Not Found');
                console.log(`6. Email Id            : `, responsedata.email !== null ? responsedata.email : 'Not Found');
                console.log(`7. Hireable            : `, responsedata.hireable !== null ? `\u2714` : `\u274C`);
                console.log(`-----------------Top 5 Repositories of ${username}----------------`);
                if (responsedata.public_repos === 0) {
                    console.log(`No public repositories`);
                  } fetchingrepos(responsedata.repos_url).then(repositories => {
                    printTop5Repositories(repositories);
                console.log(`----------------------------------------------------------------`);
                });
                  
                

            } else {
                return mainmenu();
            }
        });
}

function printTop5Repositories(repositories) {
    const top5Repositories = repositories.slice(0, 5);
    top5Repositories.forEach(repository => {
        console.log(
            `Repository Name : ${repository.name} | Description : ${repository.description ? repository.description : 'No Description'
            }`
        );
    });
}

mainmenu();



