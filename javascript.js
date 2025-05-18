function getComputerChoice() {
    let max = 3;
    let number = Math.floor(Math.random() * max);

    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let answer = prompt("Rock, Paper, or Scissor?")
    answerLower = answer.toLocaleLowerCase()

    if (answerLower === "rock") {
        return "Rock"
    } else if (answerLower === "paper") {
        return "Paper"
    } else if (answerLower === "scissor") {
        return "Scissor"
    } else {
        return "Fill in Rock, Paper or Scissor"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    console.log("Computer:", computerChoice);
    console.log("Human:", humanChoice);

    if (humanChoice === computerChoice) {
        return "It's a draw. Play again."
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        return "You win! Rock beats Scissor."
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return "You win! Paper beats Rock."
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        return "You win! Scissor beats Paper."
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + "."
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Computerscore:", computerScore)
        console.log("Jouw score:", humanScore)
    }
}

playGame();