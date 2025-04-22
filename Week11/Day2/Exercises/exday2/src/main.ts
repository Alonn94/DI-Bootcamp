// Exercise 1 

class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position= position;
    this.department= department;

};

public getEmployeeInfo() : string {
  return `Name: ${this.name}, Position: ${this.position}`;
};
};

const employee1 = new Employee("Alonn", 10000, "Manager", "Engineering");

console.log(employee1.getEmployeeInfo());

// Exercise 2

class Product {
  readonly id:number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name= name;
    this.price= price;
}
public getProductInfo() : string {
  return `${this.name} costs ${this.price}$`;
}};

const prod = new Product(111,"Phone",800);
console.log(prod.getProductInfo());

prod.id =102 //Cannot assign to 'id' because it is a read-only property.ts(2540)


// Exercise 3

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  public makeSound(): string {
    return "Some animal sound";
  }
}


class Dog extends Animal {
  public makeSound (): string {
    return "WauWau";
  }
}

const dog = new Dog("Juno");
console.log(dog.makeSound());


// Exercise 4

class Calculator {
  static add(a:number, b:number) : number {
    return a + b;
  }
  static substract(a:number, b:number) : number {
    return a-b;
  }
}

console.log(Calculator.add(10,5))


// Exercise 5

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}, Name:${user.name}, Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  }
}

const premium: PremiumUser = {
  id:1,
  name: "Alonn",
  email: "alonn.b@hotmail.com",
  membershipLevel: "Gold"
};

printUserDetails(premium);




