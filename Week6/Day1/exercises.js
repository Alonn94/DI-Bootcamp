// Exercises 1



function compareToTen (num){
    return new Promise((resolve,reject) => {
        if (num <= 10) {
            resolve(`${num} is less or equal to 10`);
         } else {
            reject(`${num} is greater than 10`);
         }
    });

}


// Exercises 2

const latePromise = new Promise ((resolve, reject) =>{
    setTimeout(()=> {
        resolve("success");
    },4000);
});


// Exercises 3


const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(result => console.log(result));

const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => console.log(error));

console.log(rejectedPromise)



// Daily challenge 1

function makeAllCaps(words) {
    return new Promise ((resolve,reject) =>{
        if (words.every(word => typeof word === "string")) {
            resolve(words.map(word=>word.toUpperCase()));
        } else {
    reject("Array has one no string element");
    }
    });
}

function sortWords(words) {
    return new Promise ((resolve,reject) => {
        if (words.length > 4){
            resolve(words.sort());
        } else {
            reject ("Array smaller than 4");
        }
    });
}