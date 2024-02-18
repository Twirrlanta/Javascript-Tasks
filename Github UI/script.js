const input = document.querySelector('input');
const button = document.querySelector('.search-button');


function users () {
    fetch(`https://api.github.com/users/${input.value}`)
      .then((response) => response.json())
        .then((data) => {
            const content = document.querySelector("section");
            content.innerHTML = `
                <section class="container">

        <div class="header">
            <p id="paragraph">devfinder</p>
            <button class="toggle"><p>Light</p> <img src="./assets/002-sun.svg"></button>
        </div>

     <div class="input-area">
        <div class="search-container">
             <input type="text" id="search" placeholder="Search Github username...">
             <button class="search-button">Search</button>
        </div>
    </div>

        <div class="content-area">
            
            <img class="user-img" style="border-radius: 50%" src="${data.avatar_url}">

        <div class="wrapper">
            <div class="user-header">
                <p class="username">${data.name}</p>
                <p class="join-date">${data.created_at}</p>
            </div>

            <div class="link">
                <a href="#">${data.url}</a>
            </div>

            <div class="bio">
                <p>${data.bio}</p>
            </div>

            <div class="dev-info">
                <div class="git-info">
                    <div class="repos">
                        <p id="info-header">Repos</p>
                        <p id="info-paragraph">${data.public_repos}</p>
                    </div>

                    <div class="followers">
                        <p id="info-header">Followers</p>
                        <p id="info-paragraph">${data.followers}</p>
                    </div>

                    <div class="Following">
                        <p id="info-header">Following</p>
                        <p id="info-paragraph">${data.following}</p>
                    </div>
                </div>

                <div class="socials">
                    <div class="right-row">
                        <div class="upper-column">
                            <img height="20px" src="./assets/003-pin.png">
                            <p>${data.location}</p>
                        </div>
                        <div class="lower-column">
                             <img src="./assets/002-url.png">
                             <p>${data.html_url}</p>
                        </div>
                    </div>

                    <div class="left-row">
                        <div class="upper-column">
                             <img height="20px" src="./assets/004-twitter.png">
                             <p>${data.twitter_username}</p>
                        </div>

                        <div class="lower-column">
                            <img src="./assets/001-office-building.png">
                            <p>${data.login}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
            `;
      });
}


button.addEventListener("click", () => {
    setTimeout(() => {
        users();
    }, 1000);
});

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        setTimeout(() => {
            users();
        }, 1000);
    }
});


