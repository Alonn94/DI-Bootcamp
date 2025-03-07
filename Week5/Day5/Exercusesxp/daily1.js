const myForm =document.getElementById("Form");
const outputDiv=document.getElementById("output");

myForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const formData ={
        firstName: firstName,
        lastName:lastName
    };

    const jsonString = JSON.stringify(formData,null,2)
    outputDiv.textContent = jsonString;


});





// function func(e){
//     e.preventDefault();
//     const infoData=document.querySelector("form");
//     const formData = new FormData(infoData);
//     console.log(formData)

// }


// generateColors()
// let setCurrentColor
// listenToMain()
// let isMousePressed=false

// document.body.addEventListener("click",handleclick)

// function listenToMain() {
//     const main=document,getElementBy("main")
//     main.addEventListener("mousedown",handleClick)
//     main.addEventListener("mousemove",handleMove)
//     main.addEventListener("mouseup",handleMouseRelease)
// }

