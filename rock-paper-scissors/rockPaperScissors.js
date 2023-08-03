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
  // See who won
  computer = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  console.log(`Player -> ${player} and Computer -> ${computer}`);
  let winner = seeWhoWins();
  console.log(`Winner is ${winner}`);

  // Update score display
  if (winner === "player") score++;
  if (winner === "computer") score--;
  document.getElementById("scores").innerHTML = score;

  // Hide container and Display results-container
  toggleDisplay();
  DisplayResults();

  // update Who Won Message
  let whoWonText = document.getElementById("who_won_text");
  if (winner == "player") whoWonText.innerHTML = "YOU WIN";
  else if (winner == "tie") whoWonText.innerHTML = "TIE GAME";
  else whoWonText.innerHTML = "YOU LOSE";
}

// helper function: update results area
function DisplayResults() {
  // Update player's icon
  document.getElementById(
    "human-result"
  ).classList = `option human-result ${player}-result`;

  document.getElementById(
    "human-result-img"
  ).src = `./images/icon-${player}.svg`;

  // Update computer's icon
  document.getElementById(
    "computer-result"
  ).classList = `option human-result ${computer}-result`;

  document.getElementById(
    "computer-result-img"
  ).src = `./images/icon-${computer}.svg`;
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

// helper function: toggle start-box and results-box
function toggleDisplay() {
  document.getElementById("start-box").classList.toggle("hide");
  document.getElementById("results-container").classList.toggle("hide");
  document.getElementById("play_again_box").classList.toggle("hide");
  document.getElementById("main").style.backgroundImage = "none";
}

// Play Again Button
document.getElementById("play_again_button").addEventListener("click", (e) => {
  toggleDisplay();
});

/*****************************************************************************/
// RULES functionality
document.getElementById("rules_button").addEventListener("click", (e) => {
  toggleContainers();
});

document.getElementById("rules_exit_button").addEventListener("click", (e) => {
  toggleContainers();
});

// Hide and Reveal main container and rules-container
function toggleContainers() {
  let rules = document.getElementById("rules-container");
  let container = document.getElementById("container");

  container.classList.toggle("hide");
  rules.classList.toggle("hide");
}
