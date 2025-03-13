

// Exercises 1


async function fetchGif(){
    try {
        const response = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
        if (!response.ok){
            throw new Error ("Something went wrong");
        } 
        const data = await response.json();
        console.log ("Gif data :",data);
        } catch (error) {
            console.log("Error fetchhing gifs", error);
        }
    }

fetchGif();



// Exercise 2

async function fetchsungif(){
    try {
        const response =await fetch("https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=sun&limit=10&offset=2&rating=g");
        if (!response.ok){
            throw new Error (`Http error! ${response.status}`);
        }
        const data = await response.json();
        console.log ("Gif data received:", data);
        } catch (error) {
            console.log("Error fetching gifs", error);  
        }
    }

fetchsungif();

// Exercise 3

async function fetchStarWars (){
    try {
        const response = await fetch ("https://www.swapi.tech/api/starships/9/");
        if (!response.ok){
            throw new Error (`Http error! ${response.status}`);
        }
        const data = await response.json();
        console.log ("Starwars Data:", data.result);
    } catch (error) {
        console.log("Error fetching Star wars", error)
    }
}

fetchStarWars();



// Exercise 4

// when calling the function asyncall, it will call from within the resolveafter2seconds function, and wait for its fullfilled promise after 2seconds only then it will console log the result=resolved
