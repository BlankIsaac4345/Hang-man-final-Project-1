console.log("Jarvis Online")

let wordList = [
  {word: "BARCELONA", theme: "Spanish City"},
  {word: "LAMBORGHINI", theme: "Luxury Car Brand"},
  {word: "JAVASCRIPT", theme: "Programming Language"},
  {word: "ANTIESTABLISHMENTARIANISM", theme: "One of the worlds longest words"},
  {word: "SUPERCALIFRAGILISTICEXPIALIDOCIOUS", theme: "One of the worlds longest words"}
];
let currentWordIndex = 0;
let mysteryWord = wordList[currentWordIndex].word;  // FIXED: Use array
let gameWon = false;
let wrongGuesses = 0;
let maxWrongGuesses = 6;

function checkGuess() {
  let guessedLetter = document.getElementById("letter-input").value;
  guessedLetter = guessedLetter.toUpperCase();

  if (mysteryWord.includes(guessedLetter)) {
    for (let i = 0; i < mysteryWord.length; i++) {
      if (mysteryWord[i] === guessedLetter) {
        document.getElementById("box" + i).innerText = guessedLetter;
      }
    }
  } else {
    document.getElementById("wrong-list").innerText += guessedLetter + " ";
    wrongGuesses = wrongGuesses + 1;
    document.getElementById("guesses-left").innerText = maxWrongGuesses - wrongGuesses;
    
    // Show the hangman part
    let partImage = document.getElementById("hangman-part-" + wrongGuesses);
    partImage.src = "hangman" + wrongGuesses + ".png";
    partImage.style.display = "block";
    
    checkForLose();
  }  // FIXED: Added missing closing brace
  
  document.getElementById("letter-input").value = "";
  checkForWin();
}

function checkForWin() {
  let allLettersGuessed = true;

  for (let i = 0; i < mysteryWord.length; i++) {
    let box = document.getElementById("box" + i);
    if (box.innerText === "_") {
      allLettersGuessed = false;
      break;
    }
  }

  if (allLettersGuessed && gameWon === false) {
    gameWon = true;
    currentWordIndex = currentWordIndex + 1;
    
    if (currentWordIndex < wordList.length) {
      alert("Good job! You completed " + currentWordIndex + "/5. Next word!");
      loadNextWord();
    } else {
      alert("Congratulations! You completed all 5 words!");
    }
  }
}

function checkForLose() {
  if (wrongGuesses >= maxWrongGuesses) {
    alert("You lost! The word was: " + mysteryWord);
  }
}

function loadNextWord() {
  mysteryWord = wordList[currentWordIndex].word;
  gameWon = false;
  wrongGuesses = 0;
  
  document.getElementById("progress").innerText = (currentWordIndex + 1) + "/5";
  document.getElementById("theme").innerText = wordList[currentWordIndex].theme;
  document.getElementById("guesses-left").innerText = maxWrongGuesses;
  document.getElementById("wrong-list").innerText = "";
  
  // Hide all hangman parts
  for (let i = 1; i <= 6; i++) {
    document.getElementById("hangman-part-" + i).style.display = "none";
  }
  
  createLetterBoxes();
}

function createLetterBoxes() {
  let wordDisplay = document.getElementById("word-display");
  wordDisplay.innerText = "";
  
  for (let i = 0; i < mysteryWord.length; i++) {
    let box = document.createElement("div");
    box.className = "letter-box";
    box.id = "box" + i;
    box.innerText = "_";
    wordDisplay.appendChild(box);
  }
}

createLetterBoxes();  // FIXED: Moved to bottom, not indented