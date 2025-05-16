let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let max = 3
    number = Math.floor(Math.random() * max)

    if (number === 0) {
        return "Rock"
    } else if (number === 1) {
        return "Paper"
    } else {
        return "Scissor"
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

}

const humanChoice = getComputerChoice();
const computerChoice = getComputerChoice();

console.log(getComputerChoice())
console.log(getHumanChoice())