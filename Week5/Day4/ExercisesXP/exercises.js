// Exercise 1

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// it will console log all of the values defined in person

// Exercise 2


// function displayStudentInfo(objUser){
//     //destructuring

// const {first, last} =objUser
// return `Your first name is ${first} and your last name is ${last}.`;}

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3


const users = { user1: 18273, 
                user2: 92833, 
                user3: 90315 }

const newArray=Object.entries(users)
console.log(newArray)

const{user1,user2,user3} = users

console.log(user1 *2)

// Exercise 4


class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

//   new member is an object created from the class"person"


// Exercise 5

// #2, since the new created labrador takes 2 arguments, 
// name calls the syper class constructor, and new property is size 

// Exercise 6

[2] === [2] 
{} === {}

// both are false - dont share the same memory location

// object is passed by Reference, does not change the actual value 

class Animal {
    constructor (name,type,color) {
        this.name = name;
        this.type=type;
        this.color=color;
    }}

class Mammal extends Animal {
    constructor (name,type,color){
        super(name,type,color)
    }

sound(sounds) {
    console.log(`${this.name},${this.type},${this.color} are the details, and it does ${sounds}`);
}}


let farmerCow = new Mammal("Cow","Lily","Brown");
farmerCow.sound("Moooo");


