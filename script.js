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
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection == "rock") {
        if (computerChoice == "rock") {
            return "It's a tie! Play again.";
        } else if (computerChoice == "paper") {
            return "You lose! Paper beats rock.";
        } else if (computerChoice == "scissors") {
            return "You win! Rock beats scissors!";
        } else {
            return "Not an option, buddy.";
        }
    }
}

/*
const playerSelection = "rock";
const computerChoice = getComputerChoice();


console.log(playRound(playerSelection, computerChoice));
*/