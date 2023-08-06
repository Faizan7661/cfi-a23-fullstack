import axios from "axios";

let githubToken = "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";
let apiUrl = "https://api.github.com/";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${githubToken}`
  }
});

async function fetchGithubDetails(username) {
  try {
    const response = await authAxios.get(`users/${username}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchingrepos(reposUrl) {
  try {
    const response = await authAxios.get(reposUrl);
    const repositories = response.data;
    return repositories;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function mainmenu() {
  try {
    const response = await authAxios.get("users");
    const users = response.data;

    for (let i = 0; i < 5; i++) {
        const user = users[i];
        const responsedata = await fetchGithubDetails(user.login);


      console.log(`\n-------------------------User Details------------------------`);
      console.log(`1. Name                : `, responsedata.name);
      console.log(`2. Number Of Followers : `, responsedata.followers);
      console.log(`3. Number Of Following : `, responsedata.following);
      const maxLength = 80;
      const splitBio =
        responsedata.bio !== null
          ? responsedata.bio.length > maxLength
            ? `${responsedata.bio.substring(0, maxLength)}\n\t\t\t${responsedata.bio.substring(maxLength)}`
            : responsedata.bio
          : 'Not found';
      console.log(`4. Bio                 : `, splitBio);
      console.log(`5. Location            : `, responsedata.location !== null ? responsedata.location : 'Not Found');
      console.log(`6. Email Id            : `, responsedata.email !== null ? responsedata.email : 'Not Found');
      console.log(`7. Hireable            : `, responsedata.hireable !== null ? `\u2714` : `\u274C`);
      console.log(`-----------------Top 5 Repositories of ${responsedata.login}----------------`);

      const repositories = await fetchingrepos(responsedata.repos_url);
      if (repositories && repositories.length > 0) {
        printTop5Repositories(repositories);
      } else {
        console.log(`No public repositories`);
      }

      console.log(`----------------------------------------------------------------`);
    }
  } catch (error) {
    console.error(error);
  }
}

function printTop5Repositories(repositories) {
  const top5Repositories = repositories.slice(0, 5);
  top5Repositories.forEach(repository => {
    console.log(
      `Repository Name : ${repository.name} | Description : ${repository.description ? repository.description : 'No Description'}`
    );
  });
}

mainmenu();


//,,.,,...,.mnnnhnhnhnhhhnhnhnnhnhnnnhnhnhn