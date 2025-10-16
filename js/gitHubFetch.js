"use strict"

function getGitHubUserData(gitHubUser){
    const url = `https://api.github.com/users/${gitHubUser}`
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`${response.Error} Status: ${response.statusText}`)
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            createUserCard(data)
            // if (data.followers_url){
            //     getData(url.Replace(data.login, follower.login));
            // }
        })
        .catch(error => {
            console.error(`Fetch error: ${error}`)
        })
    };

function createUserCard(data) {
    const userContainer = document.getElementById("users");
    const newUserCard = document.createElement('div');
    newUserCard.classList.add('user-card');
    newUserCard.innerHTML=`
            <p class="name" id="username"><strong>Login: </strong><br>${data.login}</p>
            <p class="email" id="name"><strong>Email: </strong><br>${data.name}</p>
            <p class="company-name" id="company"><strong>Company: </strong><br>${data.company ?? ''}</p>
            <p class="years-employed"><strong>Bio:</strong><br> ${data.bio}</p>`;

    userContainer.appendChild(newUserCard);
};

function clearResults(){
    const userContainer = document.getElementById("users"); //is there a way to make this a global variable?
    userContainer.innerHTML = '';
}

const userDataButton = document.getElementById("view-user-btn");
const resetButton = document.getElementById("reset-btn");


userDataButton.addEventListener("click", () => {getGitHubUserData("tkdjohn")});

resetButton.addEventListener("click", () => {clearResults()});