import axios from "axios";
import readlineSync from "readline-sync";

async function fetchGithubDetails(username) {
  try {
    let response = await axios.get(`https://api.github.com/users/${username}`);
    const data = response.data;
    console.log(response.data);
    console.log(response.data.repos_url);
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

fetchGithubDetails("Faizan7661")