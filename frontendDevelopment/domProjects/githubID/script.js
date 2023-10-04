async function fetchGithubDetails(username) {
    try {
        let response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;
        return data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            alert('Invalid username. Please enter a valid GitHub username.');
        } else {
            console.error(error);
        }
        return null;
    }
}

// Function to fetch the number of public and private repositories
async function fetchRepoDetails(username) {
    try {
        let response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repos = response.data;
        return repos;
    } catch (error) {
        console.error(error);
        return [];
    }
}


async function updateProfileCard(username) {
    const name = document.getElementById('name');
    const profileImage = document.getElementById('profileImage');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const bio = document.getElementById('bio');
    const location = document.getElementById('location');
    const email = document.getElementById('email');
    const publicRepos = document.getElementById('publicRepos');
    const publicReposLink = document.getElementById('publicReposLink');

    const userData = await fetchGithubDetails(username);
    const repos = await fetchRepoDetails(username);

    if (userData) {
        name.textContent = userData.name;
        profileImage.src = userData.avatar_url;
        followers.textContent = userData.followers;
        following.textContent = userData.following;
        bio.textContent = userData.bio || 'Not found';
        location.textContent = userData.location || 'Not found';
        email.textContent = userData.email || 'Not found';

        // Display user details
        document.querySelector('.user-details').style.display = 'block';
        document.querySelector('.profile-image').style.display = 'block';

        const publicReposCount = repos.filter((repo) => !repo.private).length;
        publicRepos.textContent = `Public Repositories: ${publicReposCount}`;

       
    }
}


const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', () => {
    const githubUsername = document.getElementById('githubUsername').value.trim();

    if (githubUsername !== '') {
        updateProfileCard(githubUsername);
    } else {
        alert('Please enter a GitHub username.');
    }
});
