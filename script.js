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
    
    let computerChoice = getComputerChoice();
    let playerSelection = playerSelection.toLowerCase();
    let win = `You win! Your ${playerSelection} beats Computer's ${computerChoice}!`;
    let lose = `You lose! Computer's ${computerChoice} beats your ${playerSelection}!`;
    let tie = `It's a tie! Play again.`;
    let badInput = "Not an option, buddy. Round forfeit to Computer.";
    let computerScore = 0;
    let playerScore = 0;


    if (playerSelection === computerChoice) {
        console.log(tie);
        return 0;
    } else if (playerSelection === "rock") {
        if (computerChoice === "scissors") {
            console.log(win);
            playerScore++;
        } else {
            console.log(lose);
            computerScore++;
        }
    } else if (playerSelection === "paper") {
        if (computerChoice === "rock") {
            console.log(win);
            playerScore++;
        } else {
            console.log(lose);
            computerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "paper") {
            console.log(win);
            playerScore++;
        } else {
            console.log(lose);
            computerScore++;
        }
    } else {
        console.log(badInput);
        return -1;
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', startGame));

function startGame(e) {
    playRound(e.target.getAttribute("data-move"));
}

/*

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

*/