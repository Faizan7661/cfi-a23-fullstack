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

async function  mainmenu(){
    let username = readlineSync.question(`Enter User Name : `);
    fetchGithubDetails(username)
    .then(responsedata => {
        if(responsedata){
            console.log(`----------------------------------------------------------------------------------`);
            console.log(`                            ${responsedata.name} Details                          `);
            console.log(`----------------------------------------------------------------------------------`);
            console.log(`                              User Menu Options                                   `);
            console.log(`----------------------------------------------------------------------------------`);
const options = `
1. User name
2. Number Of Followers
3. Number Of Following
4. Bio
5. Location
6. Email
7. Hireable
8. Print Top 5 Repositories Details
9. Exit
`;

while (true) {
  console.log(options);
  const selectedOption = readlineSync.questionInt('Enter Your Choice: ');
  console.log(`----------------------------------------------------------------------------------`);
  

                switch(selectedOption){
                    case 1:
                    console.log(`Name                : `, responsedata.name);
                    console.log(`----------------------------------------------------------------------------------`);
                    break;
                    case 2:
                    console.log(`Number Of Followers : `, responsedata.followers);
                    console.log(`----------------------------------------------------------------------------------`);
                    break;``
                    case 3:
                    console.log(`Number Of Following : `, responsedata.following);
                    console.log(`----------------------------------------------------------------------------------`);
                    break;
                    case 4:
                    const maxLength = 80;
                    const splitBio =
                    responsedata.bio !== null
                    ? responsedata.bio.length > maxLength
                    ? `${responsedata.bio.substring(0, maxLength)}\n\t\t\t${responsedata.bio.substring( maxLength )}`
                    : responsedata.bio : 'Not found';
                    console.log(`Bio                 : `, splitBio);
                    console.log(`----------------------------------------------------------------------------------`);
                    break;
                    case 5:
                    console.log(`Location            : `, responsedata.location !== null ? responsedata.location : 'Not Found');
                    console.log(`----------------------------------------------------------------------------------`);
                    break;
                    case 6:
                    console.log(`Email Id            : `, responsedata.email !== null ? responsedata.email : 'Not Found');
                    console.log(`----------------------------------------------------------------------------------`);
                    break;
                    case 7:
                    console.log(`Hireable            : `, responsedata.hireable !== null ? `\u2714` : `\u274C`);
                    console.log(`----------------------------------------------------------------------------------`);
                    break;
                    case 8:
                    console.log(`-----------------Top 5 Repositories of ${username}----------------`);
                        fetchingrepos(responsedata.repos_url).then(repositories => {
                            printTop5Repositories(repositories);
                    console.log(`----------------------------------------------------------------`);
                        });
                    break;
                    case 9:
                    return ;
                    break;
                    default:
                    console.log(`Invalid input`);
                    break;

                }

            }
            

        }
        else{
            return mainmenu();
        }
    })
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
/*
1. Name
2. No. of Followers
3. No. of Following
4. Bio
5. Location - If no location display - No Location Found
6. Email - If no Email, Display No Email Found
7. Hireable - Show a Tick if Yes, Show a Cross if no/null
8. (Try Displaying Image on CLI (bonus))
9. Display Top 5 Repositories 
Repo Name | Description

?. optional Chaining
? : Ternary  


*/


