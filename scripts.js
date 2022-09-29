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
    
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors"){
        return playerChoice;
    }
    else {
        console.log("Please choose Rock, Paper, or Scissors!");
    }
}
const playerSelection = playerChoice();


function playRound(playerSelection, computerSelection) {
    return console.log("dookie butt");
}
console.log(playRound(playerSelection, computerSelection));
