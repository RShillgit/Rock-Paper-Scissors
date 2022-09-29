// Function that plays a 5 round game of Rock/Paper/Scissors and keeps track of score
function Game() {

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
    function playerChoice(input){
        let playerChoice = input.toLowerCase();

        if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            alert("Please choose Rock, Paper, or Scissors!");
            return
        }
        else {
            return playerChoice;
        }
    }
    

    function playRound(playerSelection, computerSelection) {
        // Wins = 1, losses/ties = 0 to keep track of score
        let win = 1
        let lose_or_tie = 0
        // Statements to use for alerts after each round
        let winningStatement = `You Won! ${playerSelection} beats ${computerSelection}!`
        let losingStatement = `You Lost! ${playerSelection} loses to ${computerSelection}!`

        if (playerSelection == computerSelection) {
            console.log(`You Tied! ${playerSelection} ties ${computerSelection}`)
            return lose_or_tie
        }
        else {
            if (playerSelection == "rock" && computerSelection == "scissors") {
                console.log(winningStatement)
                return win
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
                console.log(winningStatement)
                return win
            }
            else if (playerSelection == "scissors" && computerSelection == "paper") {
                console.log(winningStatement)
                return win
            }
            else {
                console.log(losingStatement)
                return lose_or_tie
            }
        }
        
    }

    var score = 0
    for (let i = 0; i < 5; i++) {
        
        let player_selection = prompt("Please choose Rock, Paper, or Scissors!")

        let playersChoice = playerChoice(player_selection)
        let computer_selection = getComputerChoice()
        score += playRound(playersChoice, computer_selection)
        console.log(`Score:${score}`)
    }
    if (score >= 3) {
        return console.log(`You Won! Final score:${score}`)
    }
    else {
        return console.log(`You Lost! Final score:${score}`)
    }
}
Game()