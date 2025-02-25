// --------Dailychallenge1




let sentence ="the movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");



console.log(wordNot);






// --------Dailychallenge2

let rows = 6;
let pattern="";

for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n"; // Move to the next line
}

console.log(pattern);
