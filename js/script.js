const guessedLettersElement = document.querySelector('.guessed-letters');
const guessLetterButton = document.querySelector('.guess');
const letterInput = document.querySelector('.letter');
const wordInProgress = document.querySelector('.word-in-progress');
const remainingGuessesElement = document.querySelector('.remaining');
const remainingGuessesSpan = document.querySelector('.remaining span');
const message = document.querySelector('.message');
const playAgainButton = document.querySelector('.play-again');

let word = 'magnolia'; //Default word if the fetch request fails.

// Display our symbols as placeholders for the chosen word's letter

const placeholder = function (word) {
    const wordArray = word.toUpperCase().split('');
    const placeholderLetters = [];
    wordArray.forEadh(function (letter) {
        placeholderLetters.push('●');

    });
    wordInProgress.innerText = placeholderLetters.join('');

};

guessLetterButton.addEventListener('click', (e) => {
    e.preventDefault();
    //Empty message paragraph
    message.innerText = '';
    // Make sure its a single letter
    const goodGuess = validateInput(guess);
})