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
    badInput = "Not an option, buddy. Round forfeit to Computer.";

    if (playerSelection === computerChoice) {
        console.log(tie);
        return 0;
    } else if (playerSelection === "rock") {
        if (computerChoice === "scissors") {
            console.log(win);
            return 1;
        } else {
            console.log(lose);
            return -1;
        }
    } else if (playerSelection === "paper") {
        if (computerChoice === "rock") {
            console.log(win);
            return 1;
        } else {
            console.log(lose);
            return -1;
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "paper") {
            console.log(win);
            return 1;
        } else {
            console.log(lose);
            return -1;
        }
    } else {
        console.log(badInput);
        return -1;
    }
}

function game() {

    console.log("Let's play.")

    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        score = score + playRound(playerSelection);
        console.log(`The score is now ${score}.`);
    }

    console.log(`Your final score is ${score}. Thanks for playing!`);

}