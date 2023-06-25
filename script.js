// We are going to build a function which will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’.
const tableau = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
const getComputerChoice = (tableau) => {
  const randomIndex = Math.floor(Math.random() * tableau.length);
  // get random item
  const item = tableau[randomIndex];
  return item;
};
let answer = "";
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    answer = "it's a draw";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    answer = `${playerSelection} beats ${computerSelection}`;
    scorePlayer++;
  } else {
    answer = `${computerSelection} beats ${playerSelection}`;
    scoreComputer++;
  }
  return answer;
};
// we are going to write function that get the value for playerSelection
let bouton = document.querySelectorAll(".bouton");
Array.from(bouton).forEach(function (element) {
  element.addEventListener("click", (element) => {
    let playerSelection = element.target.textContent;
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice(tableau);
    computerSelection = computerSelection.toLowerCase();
    let result = playRound(playerSelection, computerSelection);
    const div = document.createElement("div");
    div.textContent = result;
    div.classList.add("element");
    const container = document.querySelector(".container2");
    container.appendChild(div);
  });
});
