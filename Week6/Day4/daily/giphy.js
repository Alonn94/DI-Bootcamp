const form = document.getElementById("gif-form");
const input = document.getElementById("search-input")

form.addEventListener("submit", async function fetchingGif(e){
    e.preventDefault(e);
    const searchTerm = input.value.trim();
    if (searchTerm === "") return;

    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${searchTerm}&rating=g`);
        const data = await response.json();
        const gifUrl=data.data.images.original.url;
        appendGif(gifUrl);

    } catch (error){
        console.log("No Gif was found");
    }

});

const gifContainer = document.getElementById("gif-container");


function appendGif(gifUrl) {
    const gifBox = document.createElement("div");
    gifBox.classList.add("gif-box");

    const img = document.createElement("img");
    img.src = gifUrl;

    const deleteButton = document.createElement("button");
    deleteButton.textContent= "Delete";
    deleteButton.addEventListener("click", gifBox.remove());

    gifBox.appendChild(img);
    gifBox.appendChild(deleteButton);
    gifContainer.appendChild(gifBox);
    };

const deleteAllButton = document.getElementById("delete-all")

deleteAllButton.addEventListener("click",gifContainer.innerHTML = "");