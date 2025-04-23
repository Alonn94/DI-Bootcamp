// Exercise 1


interface _Person {
  name:string;
  age: number;
};

interface Address {
  street: string;
  city: string;
};


interface PersonWithAddress extends Person, Address {}


const personWithAddress: PersonWithAddress = {
  name: "Alonn Barthels",
  age: 31,
  street: "4 Ben Tsion",
  city: "Tel Aviv"
};

// Exercise 2

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else if (typeof value === "string"){
    return "Thats a string"
  }
  return "Unknown type";
}


// Exercise 3


let someValue : any = 123 ;
let newValue = someValue as string;

console.log("new value:", newValue);
console.log("type", typeof newValue);

// Exercise 4

function getFirstElement(arr: (number|string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement([42,"hello"]))

// Exercise 5

function logLength<T extends {length:number}>(value:T): void {
  console.log("Length:", value.length);
}

logLength("Hello");

// Exercise 6

type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;

};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a manager in the ${emp.department} dep.`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a developer in the ${emp.department} dep.`;
  }
  return `${emp.name} is an employee in the ${emp.department} dep.`;
}

// Exercise 7

function formatInput<T extends { toString(): string}>(input: T): string{
  const newInput = input.toString();
  return `the new input is ${newInput}`;
}

// Challenge

type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id:number;
  price: number;
};

type Order = {
  type: "order";
  orderId:number;
  amount: number;
};


function handleData(data:(User | Product | Order)[]): string [] {
  return data.map(item => {
    if (item.type === "user") {
      return `User: Hello, my name is ${item.name} ad I am ${item.age} years old.`;
    }
    else if (item.type === "product") {
      return `Product: ${item.id} costs ${item.price}$`;
    }
    else if (item.type === "order") {
      return `Order: Order ID ${item.orderId} for ${item.amount} items.`;
    }
    return "Unknown type";
  })
};



