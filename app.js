
const cardsContainer = document.querySelector(".container");


async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await response.json();

    const cardsHTML = data.map((user) => {
        return `
        <div class="card" onclick="fetchPosts(${user.id})">
            <h2 class="name">${user.name}</h2>

            <div class="email_cont">
                <h3 class="email">Email:</h3>
                <h3 class="thin">${user.email}</h3>
            </div>
            
            <div class="phone_cont">
                <h3 class="phone">Phone:</h3>
                <h3 class="thin">${user.phone}</h3>
            </div>
            
            <div class="website_cont">
                <h3 class="website">Website:</h3>
                <h3 class="thin">${user.website}</h3>
            </div> 
        </div>
        `
    }).join("");

    cardsContainer.innerHTML = cardsHTML;
}


function fetchPosts(userId)
{
    localStorage.setItem("id", userId);
    window.location.replace("./user.html");
}

getUsers();




