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

async function fetchingrepos(reposUrl) {
  try {
    let repositories = await axios.get(reposUrl);
    return repositories.data;
  } catch (error) {
    console.error(error);
  }
}

async function mainmenu() {
  let username = readlineSync.question(`Enter User Name : `);
  const responsedata = await fetchGithubDetails(username);

  if (responsedata) {
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

      switch (selectedOption) {
        case 1:
          console.log(`Name                : `, responsedata.name);
          console.log(`----------------------------------------------------------------------------------`);
          break;
        case 2:
          console.log(`Number Of Followers : `, responsedata.followers);
          console.log(`----------------------------------------------------------------------------------`);
          break;
        case 3:
          console.log(`Number Of Following : `, responsedata.following);
          console.log(`----------------------------------------------------------------------------------`);
          break;
        case 4:
          const maxLength = 80;
          const splitBio =
            responsedata.bio !== null
              ? responsedata.bio.length > maxLength
                ? `${responsedata.bio.substring(0, maxLength)}\n\t\t\t${responsedata.bio.substring(
                    maxLength
                  )}`
                : responsedata.bio
              : 'Not found';
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
          console.log(`Hireable            : `, responsedata.hireable !== null ? '\u2714' : '\u274C');
          console.log(`----------------------------------------------------------------------------------`);
          break;
        case 8:
          await handleTop5Repositories(username, responsedata.repos_url);
          break;
        case 9:
          return;
        default:
          console.log(`Invalid input`);
          break;
      }
    }
  } else {
    return mainmenu();
  }
}

async function handleTop5Repositories(username, reposUrl) {
  console.log(`-----------------Top 5 Repositories of ${username}----------------`);
  const repositories = await fetchingrepos(reposUrl);
  printTop5Repositories(repositories);
  console.log(`----------------------------------------------------------------`);
}

function printTop5Repositories(repositories) {
  const top5Repositories = repositories.slice(0, 5);
  top5Repositories.forEach((repository) => {
    console.log(
      `Repository Name : ${repository.name} | Description : ${
        repository.description ? repository.description : 'No Description'
      }`
    );
  });
}

(async () => {
  await mainmenu();
})();
