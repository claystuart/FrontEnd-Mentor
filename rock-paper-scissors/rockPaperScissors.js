let score = 0;
let player = "";
let computer = "";

document.getElementById("rock").addEventListener("click", (e) => {
  player = "rock";
  playGame();
});
document.getElementById("paper").addEventListener("click", (e) => {
  player = "paper";
  playGame();
});
document.getElementById("scissors").addEventListener("click", (e) => {
  player = "scissors";
  playGame();
});

// Main function: actually play the game
function playGame() {
  console.log(`Player choose ${player}`);
  computer = getComputerChoice();
  console.log(`Computer choose ${computer}`);
  let winner = seeWhoWins();
  console.log(`Winner is ${winner}`);

  if (winner === "player") score++;
  if (winner === "computer") score--;
  document.getElementById("scores").innerHTML = score;
}

// helper function: get computer's choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let choice = ["rock", "paper", "scissors"][randomNumber];
  return choice;
}

// helper function: see who wins
function seeWhoWins() {
  if (player === computer) return "tie";
  else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  )
    return "player";
  else return "computer";
}

// RULES functionality
document.getElementById("rules_button").addEventListener("click", (e) => {
  toggleContainers();
});

document.getElementById("rules_exit_button").addEventListener("click", (e) => {
  toggleContainers();
});

function toggleContainers() {
  let rules = document.getElementById("rules-container");
  let container = document.getElementById("container");

  container.classList.toggle("hide");
  rules.classList.toggle("hide");
}
