let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let chances = document.getElementById("chances");
let checkButton = document.getElementById('checkButton');

let randomValue = Math.ceil(Math.random() * 100);
console.log(randomValue);

function restartGame() {
    let randomValue = Math.ceil(Math.random() * 100);
    console.log(randomValue);
    gameResult.textContent = '';
    chances.textContent = 5;
    userInput.value = '';
    checkButton.classList.remove('d-none');
}

function chancesLeft() {
    let chancesLeft = parseInt(chances.textContent) - 1;
    chances.textContent = chancesLeft;
    console.log(chancesLeft);
    if (chancesLeft === 0) {
        gameResult.textContent = "You lose. Please restart the game!";
        checkButton.classList.add('d-none');
    }
}

function checkGuess() {

    let userValue = parseInt(userInput.value);

    if (userValue > randomValue) {
        gameResult.textContent = "Too high!";
        chancesLeft();
    } else if (userValue < randomValue) {
        gameResult.textContent = "Too low!";
        chancesLeft();
    } else if (userValue === randomValue) {
        gameResult.textContent = "You won.";
        chancesLeft();
    } else {
        gameResult.textContent = "Please provide valid input!";
    }
}