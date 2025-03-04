function makeJuice(sizeDrink){
    const ingredients = [];


    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        ingredients.push(firstIngredient,secondIngredient,thirdIngredient)  
        }
    addIngredients("x", "y", "i");
    addIngredients("a", "b", "c");


    function displayJuice(){
    const Juice=document.getElementById("JuiceBar");
    const JuiceElement= document.createElement("div");
    Juice.appendChild(JuiceElement)
    JuiceElement.textContent =`The client wants a ${sizeDrink} juice, containing ${firstIngredient},${secondIngredient} and ${thirdIngredient}`;
}
displayJuice();
}

// makeJuice("Medium")
