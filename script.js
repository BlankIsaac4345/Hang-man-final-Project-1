console.log("Jarvis Online")

let mysteryWord = "LAMBORGHINI";

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
    }
    document.getElementById("letter-input").value = "";
    checkForWin();
}

function checkForWin() {
    let letterBoxes = document.getElementsByClassName("letter-box");
    let filledBoxes = 0;
    
    for (let i = 0; i < letterBoxes.length; i++) {
        if (letterBoxes[i].innerText !== "") {
            filledBoxes = filledBoxes + 1;
        }
    }
    
    if (filledBoxes === 11 && gameWon === true) {
        alert("You won! Great job!");
        gameWon = false;
    }
}