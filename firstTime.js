const reader = require("readline-sync"); //npm install readline-sync

// let username = reader.question("Enter Username: ");
const password = reader.question("Enter here the secret word: ",{ hideEchoBack: true });
let fails = 0;
let letter;
let wordToGuess = '';
let placesArray;
const wordsYouUsed = [];
for(let i = 0; i < password.length; i++){wordToGuess += '*';};
console.log(wordToGuess);

const getLetter = (used)=>{

    let letter = reader.question("Enter letter: ");
    while(used.includes(letter)){
        console.log("you have already used this letter, ");
        letter = reader.question("enter another letter: ");
    }
    return letter;    
}

const makeAsterisksToLetters = (places, letter, wordTo) => {
    for(let i = 0; i < places.length; i++){
        wordTo = wordTo.substring(0, places[i]) + letter + wordTo.substring(places[i] + 1);
    }
    return wordTo
}



while(fails != 5 && wordToGuess.includes('*')){
    letter = getLetter(wordsYouUsed);
    placesArray = [];
    console.log(password.includes(letter))
    if (password.includes(letter)){
        for(let i = 0; i < password.length; i++){
            if(password[i] === letter) placesArray.push(i);
        }
        wordToGuess = makeAsterisksToLetters(placesArray, letter, wordToGuess);
        
    }
    else{
        fails ++;
        console.log(`you have more ${5 - fails} times to fail`)
    }
    wordsYouUsed.push(letter);
    
    console.log(wordToGuess);
}

if(fails === 5) console.log(`you loose the word was ${password}`);
else console.log(`congretulations you smart guy`);




