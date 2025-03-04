// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?

// // the function overrides the variable - a will be set as 3, since the condition is met, and the variable is set as "let"
// // There is no change, variable wont be able to be changed to 3


// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }


// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// // before running func2, variable will have the value of 0, after having evoked func2, it will change and take the new value of 5
// // like before - constand variable can not go through a change


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// // func4 will evoke function4, but when evoking function 5 - it wont refer to the same variable, since the 2 variables are different despite sharing the same letter "a"

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
// // inside the function, the variable a, takes the local veriable and will be shown as "test" in this case
// // like previously, not function can be evokes on a constant variable - not possible to evoke 
// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

// // in the block - if a will have the value of 5, 
// // I anticipate a to have the value of 2 outside of the block.I


// Exercise 2 - Ternary Operator


let experiencePoints

function winBattle(){
    return (true ? experiencePoints=10 : experiencePoints=1)
}


console.log(experiencePoints)

// Exercise 3- Is it a string?

let isString = (a) => {
    return typeof a === "string";
}


// Exercise 4 - Find the Sum

let func = (a,b) => {
    return (a+b)
}

// Exercise 5 - Find the Sum

function converter (kg) {
return kg*1000;
}

let C = function(kg) {return kg *1000};


// Function declaration defines the function and lets you call it at a later time when calling, 
// function expression stores the function into a variable

let convi = (kg) => kg *1000

// Exercise 6 - Fortunate teller


(function(numberOfChildren,PartnerName,location,jobTitle){
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${PartnerName} with ${numberOfChildren} kids`)
})()

