import peopleArray from "./data.js";

function averageAge (peopleArray) {
    const totalAge = peopleArray.reduce((sum,person) => sum + person.age,0);
    return totalAge/peopleArray.length;

}

console.log(peopleArray); 
console.log(averageAge(peopleArray));



