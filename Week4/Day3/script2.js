
//1
//2

let navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id","socialNetworkNavigation");

//**3
//1

let newLi = document.createElement("li");

//2

let LogOutText = document.createTextNode("Logout") 
newLi.appendChild(LogOutText) //3

//4

let ul=document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi)


let firstLi = ul.firstChild;
let lastLi= ul.lastElementChild

console.log(firstLi.textContent);
console.log(lastLi.textContent);
