const postsContainer = document.querySelector(".container2");
const input = document.querySelector("input");


let userID = localStorage.getItem("id");

async function displayPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = await response.json();

    const postsHTML = data.map((post) => {
        return `
        <div class="post">
            <h3 class="title">${post.title}</h3>
            <p>${post.body}</p>
        </div>
        `
    }).join("");

    postsContainer.innerHTML = postsHTML;
}

displayPosts(userID);


input.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
    {
        event.preventDefault();
        displayPosts(input.value);
    }
})