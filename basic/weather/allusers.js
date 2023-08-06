import axios from "axios";

async function getAllUsers() {
  try {
    const response = await axios.get('https://api.github.com/users');
    const users = response.data;
    return users;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getUserDetails(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userDetails = response.data;
    return userDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
}

getAllUsers()
  .then(users => {
    if (users) {
      for (const user of users) {
        console.log(user.login);
        }
    }
  })
  .catch(error => console.error(error));
