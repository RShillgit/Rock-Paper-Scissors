// Array of options 
const options = ["rock", "paper", "scissors"];

// Function that gets a random value from the options array
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*options.length);
    let computerChoice = (options[randomChoice]);
    return computerChoice;
}
const computerSelection = getComputerChoice();

// Function that takes player input 
function playerChoice(){
    let raw_input = prompt("Choose Rock, Paper, or Scissors. ");
    let playerChoice = raw_input.toLowerCase();

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("Please choose Rock, Paper, or Scissors!");
        return
    }
    else {
        return playerChoice;
    }
}
const playerSelection = playerChoice();

// If player entered a correct option ...
if (typeof playerSelection !== "undefined") {
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return console.log("You Tied!")
        }
        else {
            let winningStatement = `You Won! ${playerSelection} beats ${computerSelection}`
            let losingStatement = `You Lost! ${playerSelection} loses to ${computerSelection}`
            if (playerSelection == "rock" && computerSelection == "scissors") {
                return console.log(winningStatement)
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
                return console.log(winningStatement)
            }
            else if (playerSelection == "scissors" && computerSelection == "paper") {
                return console.log(winningStatement)
            }
            else {
                return console.log(losingStatement)
            }
        }
    }
    console.log(playRound(playerSelection, computerSelection));
}


