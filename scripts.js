// Function that plays a 5 round game of Rock/Paper/Scissors and keeps track of score
function Game() {

    // Initialize score to 0
    let totalScore = 0;

    // Initialize variable to count rounds played
    let roundsPlayed = 0;

    // Array of options 
    const options = ["rock", "paper", "scissors"];

    // Function that gets a random value from the options array
    function getComputerChoice(){
        let randomChoice = Math.floor(Math.random()*options.length);
        let computerChoice = (options[randomChoice]);
        return computerChoice;
    }
    

    function playRound(playerSelection, computerSelection) {

        // Statements to use for alerts after each round
        let winningStatement = `You won, ${playerSelection} beats ${computerSelection}!`
        let losingStatement = `You lost, ${playerSelection} loses to ${computerSelection}!`
        let tieStatement = `You tied, ${playerSelection} ties with ${computerSelection}!`;

        // Get roundMessage <p> tag and save it in a variable to change inner html later
        const roundMessage = document.getElementById('roundMessage');

        if (playerSelection === computerSelection) {
            roundMessage.innerHTML = tieStatement;
        }
        else {
            if (playerSelection == "rock" && computerSelection == "scissors") {
                // Incriment score
                totalScore ++;
                roundMessage.innerHTML = winningStatement;
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
                // Incriment score
                totalScore ++;
                roundMessage.innerHTML = winningStatement;   
            }
            else if (playerSelection == "scissors" && computerSelection == "paper") {
                // Incriment score
                totalScore ++;
                roundMessage.innerHTML = winningStatement;
                
            }
            else {
                roundMessage.innerHTML = losingStatement;
            }
        }
        // Set totalScore html to the total score
        document.getElementById('totalScore').innerHTML = `Score: ${totalScore}`;
        
    }

    // Event listener on buttons that calls playRound function
    const rps_options = document.querySelectorAll('button'); 

    rps_options.forEach((rps_option) => {
        rps_option.addEventListener('click', function (e) {

            // Incriment rounds played variable
            roundsPlayed ++;

            // Allow game to run until either user or computer gets 5 points
            while (roundsPlayed <= 9) {
                // Store selected button id (rock, paper, or scissors) in a variable
                selectedOption = e.target.id;
                // Get random computer choice
                const computerSelection = getComputerChoice();
                
                return playRound(selectedOption, computerSelection);
            }
            // If total score is < 5 that means the user lost
            if (totalScore < 5){
                alert("You Lost!");
            }
            else {
                alert("You Won!")
            };
        });
    });
 
}
Game()