const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS) == "") {
        reject("Morse object is empty");
      } else {
        resolve(morseJS);
      }
    });
  }
  
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence to convert to Morse code:").toLowerCase();
      const morseTranslation = [];
      
      for (let char of userInput) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Character '${char}' not found in Morse dictionary.`);
          return;
        }
      }
      resolve(morseTranslation);
    });
  }

  
  function joinWords(morseTranslation) {
    document.bodyinnerHTML = morseTranslation.join('br');
  }
//   5)
  
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
  



