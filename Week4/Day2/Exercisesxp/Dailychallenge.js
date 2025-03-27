// --------Dailychallenge1


let sentence = "The movie is not that bad, I like it"


let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !==-1 && wordBad !==-1 && wordBad > wordNot) {
    let newSentence = sentence.slice (0,wordNot) + "good" + sentence.slice(wordBad+3);
    console.log(newSentence);
} else {
    console.log(newSentence);
}



// --------Dailychallenge2

let rows = 6;
let pattern="";

for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}

console.log(pattern);
