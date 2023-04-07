let actionLog = document.querySelector("#actionLog");

let computerScore = 0;
let playerScore = 0;
let gamesPlayed = 0;
let psCounter = document.querySelector("#playerScore");
let csCounter = document.querySelector("#computerScore");
let gCounter = document.querySelector("#gameCount");
let psNum = document.createElement('p');
let csNum = document.createElement('p');
let gNum = document.createElement('p');

psNum.textContent = `${playerScore}`;
csNum.textContent = `${computerScore}`;
gNum.textContent = `${gamesPlayed}`;


gCounter.appendChild(gNum);
psCounter.appendChild(psNum);
csCounter.appendChild(csNum);

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
    let win = `You win! Your ${playerSelection} beats Computer's ${computerChoice}!`;
    let lose = `You lose! Computer's ${computerChoice} beats your ${playerSelection}!`;
    let tie = `It's a tie! Play again.`;
    let badInput = "Not an option, buddy. Round forfeit to Computer.";

    if (playerSelection === computerChoice) {
        gamesPlayed++;
        return tie;
    } else if (playerSelection === "rock") {
        if (computerChoice === "scissors") {
            playerScore++;
            gamesPlayed++;
            return win;
            
        } else {
            computerScore++;
            gamesPlayed++;
            return lose;
        }
    } else if (playerSelection === "paper") {
        if (computerChoice === "rock") {
            playerScore++;
            gamesPlayed++;
            return win;
        } else {
            computerScore++;
            gamesPlayed++;
            return lose;
        }
    } else if (playerSelection === "scissors") {
        if (computerChoice === "paper") {
            playerScore++;
            gamesPlayed++
            return win;
        } else {
            computerScore++;
            gamesPlayed++;
            return lose;
        }
    } else {
        return badInput;
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', startGame));

function startGame(e) {

    actionLog.textContent = playRound(e.target.getAttribute("data-move"));
    psNum.textContent = `${playerScore}`;
    csNum.textContent = `${computerScore}`;
    gNum.textContent = `${gamesPlayed}`;

    if (playerScore >= 5) {
        gameOver = document.createElement('p');
        gameOver.classList.add("gameOver")
        gameOver.textContent = `Congratulations! You won ${playerScore} to ${computerScore}!`
        document.querySelector('.log').appendChild(gameOver);
        startOverBtn = document.createElement('button');
        startOverBtn.classList.add('btn');
        startOverBtn.style["background"] = "rgb(240, 247, 151)";
        startOverBtn.style["align"] = "center";
        startOverBtn.textContent = "Play Again";
        startOverBtn.addEventListener('click', startOver);
        document.querySelector('.log').appendChild(startOverBtn);
    } else if (computerScore >= 5) {
        gameOver = document.createElement('p');
        gameOver.classList.add("gameOver");
        gameOver.textContent = `Too bad! You lost against the computer ${computerScore} to ${playerScore}!`;
        document.querySelector('.log').appendChild(gameOver);
        startOverBtn = document.createElement('button');
        startOverBtn.classList.add('btn');
        startOverBtn.style["background"] = "rgb(240, 247, 151)";
        startOverBtn.style["align"] = "center";
        startOverBtn.textContent = "Play Again";
        startOverBtn.addEventListener('click', startOver);
        document.querySelector('.log').appendChild(startOverBtn);
    } else {
        return;
    }
    
}

function startOver() {
    psNum.textContent = `${playerScore}`;
    csNum.textContent = `${computerScore}`;
    gNum.textContent = `${gamesPlayed}`;
    actionLog.textContent = "New Game";
    let gameOver = document.querySelector('.gameOver');
    document.querySelector('.log').removeChild(gameOver);
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