let humanScore = 0;
let computerScore = 0;

// function PlayGame() {
//     while (humanScore < 5 || computerScore < 5) {
//         console.log(playRound(humanSelection, computerSelection))
//         console.log(humanScore)
//         console.log(computerScore)
//     }

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))