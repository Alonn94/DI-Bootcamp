document.getElementById("fetch-character").addEventListener("click",fetchCharacter)

async function fetchCharacter() {
    const loadingMessage = document.getElementById("loading-message");
    const errorMessage = document.getElementById("error-message");
    const characterDetails = document.getElementById("character-details");

    loadingMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    characterDetails.classList.add("hidden");

    const randomId= Math.floor(Math.random()*83) +1;


    try {
        const response=await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) throw new Error ("Error occured");

        const data = await response.json();
        const character = data.result.properties;

        const homeworldResponse = await fetch (character.homeworld);
        const homeworldData = await homeworldResponse.json();
        const homeworldName= homeworldData.result.properties.name;


        document.getElementById("character-name").innerText=character.name;
        document.getElementById("character-height").innerText=character.height;
        document.getElementById("character-gender").innerText=character.gender;
        document.getElementById("character-birth").innerText = character.birth_year;
        document.getElementById("character-homeworld").innerText= homeworldName;

        loadingMessage.classList.add("hidden");
        characterDetails.classList.remove("hidden");
        } catch (error){
            console.log("Error fetchin data:",error);
            loadingMessage.classList.add("hidden");
            errorMessage.classList.remove("hidden"); 
        }
}