import axios from "axios"

// Function to fetch GitHub user details
async function fetchGithubDetails(username) {
    try {
        let response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
fetchGithubDetails("adnanali-in")

// // Function to update the HTML with user details
// async function updateProfileCard(username) {
//     const profileImage = document.querySelector('.profile-image img');
//     const name = document.getElementById('name');
//     const followers = document.getElementById('followers');
//     const following = document.getElementById('following');
//     const bio = document.getElementById('bio');
//     const location = document.getElementById('location');
//     const email = document.getElementById('email');
//     const hireable = document.getElementById('hireable');

//     const userData = await fetchGithubDetails(username);

//     if (userData) {
//         name.textContent = `Name: ${userData.name || 'Not found'}`;
//         followers.textContent = `Followers: ${userData.followers}`;
//         following.textContent = `Following: ${userData.following}`;
//         bio.textContent = `Bio: ${userData.bio || 'Not found'}`;
//         location.textContent = `Location: ${userData.location || 'Not found'}`;
//         email.textContent = `Email: ${userData.email || 'Not found'}`;
//         hireable.textContent = `Hireable: ${userData.hireable ? '✓' : '✗'}`;

//         // Set profile image
//         profileImage.src = userData.avatar_url;
//     }
// }

// // Add an event listener to the "Fetch Details" button
// const fetchButton = document.getElementById('fetchButton');
// fetchButton.addEventListener('click', () => {
//     const githubUsername = document.getElementById('githubUsername').value.trim();

//     if (githubUsername !== '') {
//         updateProfileCard(githubUsername);
//     } else {
//         alert('Please enter a GitHub username.');
//     }
// });
