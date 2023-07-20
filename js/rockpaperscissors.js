const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice; //saved globally
let computerChoice;
let finalResult;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0){
        computerChoice = 'rock'
    }
    if (randomNumber === 1){
        computerChoice = 'paper'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        finalResult = "It's a draw."
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        finalResult = "You win."
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        finalResult = "Computer wins."
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        finalResult = "Computer wins."
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        finalResult = "User wins."
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        finalResult = "User wins."
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        finalResult = "Computer wins."
    }
    result.innerHTML = finalResult
}