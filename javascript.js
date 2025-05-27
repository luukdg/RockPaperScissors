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

// Rock, Paper and Scissor functions
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const btn = document.querySelectorAll("button");

rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    human.textContent = "You: " + humanScore;
    computer.textContent = "Computer: " + computerScore;
})

paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
    human.textContent = "You: " + humanScore;
    computer.textContent = "Computer: " + computerScore;
})

scissor.addEventListener("click", () => {
    playRound("Scissor", getComputerChoice());
    human.textContent = "You: " + humanScore;
    computer.textContent = "Computer: " + computerScore;
})

let humanScore = 0;
let computerScore = 0;

btn.forEach((button) => {
    button.addEventListener("click", () => {
        const results = document.querySelector(".results")

        if (humanScore === 5) {
            results.textContent = "You win! You reached 5 first."
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            results.textContent = "You lose! The computer reached 5."
            humanScore = 0;
            computerScore = 0;
        }
    });
});

