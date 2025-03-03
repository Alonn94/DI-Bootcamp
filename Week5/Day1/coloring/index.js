generateColors()
let setCurrentColor
listenToMain()
let isMousePressed=false

document.body.addEventListener("click",handleclick)

function listenToMain() {
    const main=document,getElementBy("main")
    main.addEventListener("mousedown",handleClick)
    main.addEventListener("mousemove",handleMove)
    main.addEventListener("mouseup",handleMouseRelease)
}


function handleMouseRelease(){
    isMousePressed=false
}

function handleClick(){
    if (setCurrentColor==null) return
    isMousepressed =true
}

function handleMove(){
    if (!isMousePressed) return
}

function generateColors() {
    const colorDivs = document.querySelectorAll(".color");
    for (const colorDiv of colorDivs) {
        const randomColor = generateRandomColor();
        colorDiv.style.backgroundColor = randomColor;
        colorDiv.dataset.color=randomColor
        colorDiv.addEventListener("click",setCurrentColor)
    }
}

function generateRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex;
}


function setCurrentColor(){
setCurrentColor= e.target.dataset.color
}