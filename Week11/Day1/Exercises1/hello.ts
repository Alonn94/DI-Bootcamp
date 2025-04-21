//Exercise1

let message: string = "Hello, World!";
console.log(message);

//Exercise2


let age: number = 31;
let firstname: string = "Alonn";

console.log (age, firstname);

//Exercise3

let id: string | number

id= 111;
id= "abcd"

//Exercise4

const checkNumber = (num: number): string => {
    if (num > 0) {
        return "pos";
    if (num === 0) {
        return "zero";
    }
    } else {
        return "neg";
    }
}

//Exercise5


console.log(checkNumber(10));  

const getDetails = (name: string, age: number): [string, number, string] => {
    return [name, age, `Hello ${name}, you are ${age} years old!`];
} 

console.log(getDetails("Alonn", 31));

//Exercise6

let Person : {
    name: string
    age: number
}

const createPerson= (name: string, age: number) => {
    return Person = {
        name: name,
        age: age}
}

console.log(createPerson("Alonn", 31))

//Exercise7

const inputElement = document.getElementById("app") as HTMLInputElement;

inputElement.value = "Hello, TypeScript!";

//Exercise8


const getAction = (role:string) : string => {
    switch (role.toLowerCase()){
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        case "unknown":
            return "invalid role";
    }
}

//Exercise9

function greet(name?: string): string {
    return `Hello, ${name ?? "there"}!`;
  }

  console.log(greet());         // ➜ "Hello, there!"



  // Dail Challenge ValidateUntionType


  function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
  
    for (let type of allowedTypes) {
      if (valueType === type) {
        return true;
      }
    }
  
    return false;
  }