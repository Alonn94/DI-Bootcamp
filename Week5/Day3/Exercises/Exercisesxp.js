// Exercise 1

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((colour,index) => { console.log(`${index+1}# is color ${colour}.`);
});


if (colors.some(color => color ==="Violet")) {
    console.log("Yes");
} else {
    console.log("No");
}


// Exercise 2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color,index) => {


})


// Exercise 3

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// in the Array, the vegetables as well as the fruits will be unpacked because of the ...,
// so we have "bread", "carrot","potato", and "chicken","apple","orange"


// ------2------
// const country = "USA";
// console.log([...country]);

// if applied on a string - it will seperate each character as seen in class

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// in this case, it packs 2 empty objects into the array 

// Exercise 4


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


    const WelcomeStudents = users.map(user => `Hello ${user.firstName}`)
    const OnlyFullStack = users.filter(user => user.role === "Full Stack Resident");
    console.log(WelcomeStudents)

// Exercise 5

    const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


    const sentence=epic.reduce((acc,word) => acc + word+" ");
    console.log(sentence)

// Exercise 6


    const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
        {name: "Liam", course: "Computer Science", isPassed: false}, 
        {name: "Jenner", course: "Information Technology", isPassed: true}, 
        {name: "Marco", course: "Robotics", isPassed: true}, 
        {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
        {name: "Jamie", course: "Big Data", isPassed: false}];


const StudentsPassed =students.filter(student => students.isPassed ==+ true);