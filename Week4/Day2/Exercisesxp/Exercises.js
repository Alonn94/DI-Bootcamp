
// // ------ Exercise1 

// //1
// const people = ["Greg", "Mary", "Devon", "James"];


// let deletedItem = people.splice(0,1)


// console.log(people)

// //2

// people.splice(2,1,"Jason")


// console.log(people)

// //3

// people.push("Alonn")

// console.log(people)

// //4

// people.indexOf("Mary")

// //5

// let newPeople= people.slice(1,3)

// console.log(newPeople)


// //6 

// people.indexOf("Foo")

// //7

// let last = people[3]


// console.log(last)

// //Part 2

// for (let i in people) {
//     console.log(people[i])
// }


// // ------ Exercise2


// let colors = ["red", "blue","yellow"];

// for (let i in colors) {
//     console.log("My favourite color is"[i])
// }

// let suffixes = ["my 1st choice","my second choice","my 3rd choice"]

// ------ Exercise3


while (true)
{
numberString =prompt("Please enter a number:" );

number= Number(numberString)

if number >=10
   break;

else{console.log("number too small")}

}


// ------ Exercise4


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)


console.log(building.numberOfAptByFloor["firstFloor"])
console.log(building.numberOfAptByFloor["secondFloor"])


console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])


const sarahRent= building.numberOfRoomsAndRent.sarah[1]
const davidRent= building.numberOfRoomsAndRent.david[1]
const danRent= building.numberOfRoomsAndRent.dan[1]

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1]=1200

}

// ------ Exercise5

const family = {
    father:"Jerry",
    mother:"Susan",
    son:"Michael",
    daughter:"Lisa"

};

for (let key in family){
    console.log(key)
}

for (let key in family){
    console.log(family[key])

}

// ------ Exercise6

const details= {
    my: 'name',
    is: 'Rudolph',
    the: 'reindeer'
};

let sentence = ""

for (let key in details){
    sentence += key +" " +details[key] + " ";
}

console.log(sentence)

// ------ Exercise7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const societyName = names

.map(name => name[0])
.sort()
.join('');

console.log(societyName);