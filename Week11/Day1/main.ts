// npm i -g typescript

//compile it with tsc main.ts 
//to create a new file with .js 
//error shows up when compiling it 

//main.ts file into source file and add another folder "build"

//configurefile in typscript be installing tsc --init , will create the configuration file
// inside file - tsconfig.json - rootDir looking for ts file - ./src
// what is the outDir ./build file 

// noEmitonError - if the file of ts has error, it wont create the javascript file. otherwise it will comfile with error 
// tsc - w to run from the root folder .ts 
//(automatically)
// tyspript with vite - npm create vite@latest
// "vanilla" w/ typescript

//(from scratch)
// different types 
// combine two types using untion type string| number

//type array: string[] = ["a", "b", "c"]

// unfion of string number array (string|number)[] = ["a", "b", "c", 1, 2, 3]
//type tuple: length and order 

//type object: 
// const user={ name:"John", age: 30}
// type user = {
//     name: string;
//     age: number;}
// const useerJohn : User = {
//     name: "John",
//     age: 30
// }

// if some additional characteristic to be optonal, gender?
// type/ interface
// interface User {
//     name: string;
//     age: number;
//      gender?: strong|number;}

// const userJohn: User = {
    //     name: "John",
    //     age: 30,}

//type Enum
// enum Grade {
//     U,
//     A,
//     B,
//     C,} will compile to the functions that store these values 
//type literal
// type status = "failed" | "loading" | "success";

//type Aliases
//type NumberOrString = string | number;
//type UserT = {
//     name: NumberorString}

//type functions
// const sum = (a,b) => {
//     return a + b;}

function sum(a:number, b: number|string) : number|string {
    return a + b;
}

