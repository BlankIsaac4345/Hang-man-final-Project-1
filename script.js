console.log("Jarvis Online")

let mysteryWord = "BARCELONA";
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
    wrongGuesses = wrongGuesses + 1;  // Count wrong guesses
    checkForLose();  // Check if player lost
  }
  
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
    alert("You won! Great job!");
    gameWon = true;
  }
}

function checkForLose() {
  console.log("Wrong guesses:", wrongGuesses);
  console.log("Max allowed:", maxWrongGuesses);

  if (wrongGuesses >= maxWrongGuesses) {
    alert("You lost! The word was: " + mysteryWord);
  }
}