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

function playRound(humanChoice, computerChoice) {
    const results = document.querySelector(".results")
    
    console.log("Computer:", computerChoice);
    console.log("Human:", humanChoice);

    if (humanChoice === computerChoice) {
        return results.textContent = "It's a draw. Play again."
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        humanScore++;
        return results.textContent = "You win! Rock beats Scissor."
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return results.textContent = "You win! Paper beats Rock."
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        humanScore++;
        return results.textContent = "You win! Scissor beats Paper."
    } else {
        computerScore++;
        return results.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "."
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

let humanScore = 0;
let computerScore = 0;

// Rock, Paper and Scissor functions
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const human = document.querySelector(".human")
const computer = document.querySelector(".computer")

rock.addEventListener("click", () => {
    console.log(playRound("Rock", getComputerChoice()));
    human.textContent = humanScore;
    computer.textContent = computerScore;
})

paper.addEventListener("click", () => {
    console.log(playRound("Paper", getComputerChoice()));
    human.textContent = humanScore;
    computer.textContent = computerScore;
})

scissor.addEventListener("click", () => {
    console.log(playRound("Scissor", getComputerChoice()));
    human.textContent = humanScore;
    computer.textContent = computerScore;
})
