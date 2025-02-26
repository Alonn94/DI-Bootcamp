//**2   
 
// 1
let Div =document.getElementById("container");
console.log(Div)

//2

let list= document.querySelectorAll(".list")
list [0].children[1].textContent = "Richard"

//3

list[1].children[1].remove();

//4

list.forEach(l =>{
    l.children[0].textContent="Alonn"
})

//**3

//1

list[0].classList.add("university","attendance");

//2

list.forEach(l => {
    l.classList.add("student_list");
});


//**4
//1
Div.style.backgroundColor = "lightblue";
Div.style.padding ="10px";


//2

let ElementLi = list[1].querySelectorAll("li");
ElementLi.forEach(li =>{
    if (li.textContent==="Dan"){

    }
})
//3

list[0].children[1].style.border = "2px solid black";

//4
document.body.style.fontSize = "18px";
