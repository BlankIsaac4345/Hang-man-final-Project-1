console.log("Jarvis Online")

let mysteryWord = "LAMBORGHINI";

function checkGuess() {
    let guessedLetter = document.getElementById("letter-input").value;
    if (mysteryWord.includes(guessedLetter)) {
        for (let i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord[i] === guessedLetter) {
            document.getElementById("box" + i).innerText = guessedLetter;
        }
    }
    } else {
        // Letter is wrong
    }
    document.getElementById("guess-button").addEventListener("click", checkGuess);
    console.log("Click")
}