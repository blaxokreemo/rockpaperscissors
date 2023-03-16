function getComputerChoice() {
    let randomNumber = (Math.random() * 100);
    let computerChoice;
    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber >= 33 && randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(playerSelection, computerChoice) {    
    
    computerChoice = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    win = `You win! Your ${playerSelection} beats Computer's ${computerChoice}!`;
    lose = `You lose! Computer's ${computerChoice} beats your ${playerSelection}!`;
    tie = `It's a tie! Play again.`;
    badInput = "Not an option, buddy.";

    if (playerSelection === computerChoice) {
        return tie;
    } else if (playerSelection === "rock") {
        if (computerChoice === "scissors") {
            return win;
        } else {
            return lose;
        }
    } else if (playerSelection === "paper") {
        if (computerChoice === "rock") {
            return win;
        } else {
            return lose;
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "paper") {
            return win;
        } else {
            return lose;
        }
    } else {
        return badInput;
    }
}