// We are going to build a function which will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’.
const tableau = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
let egalite = 0;
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
    egalite++;
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
  element.addEventListener("click", modifytext);
});
//modify function definition
function modifytext(element2) {
  let playerSelection = element2.target.textContent;
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = getComputerChoice(tableau);
  computerSelection = computerSelection.toLowerCase();
  let result = playRound(playerSelection, computerSelection);
  const div = document.createElement("div");
  div.textContent = result;
  div.classList.add("element");
  const container = document.querySelector(".container2");
  container.appendChild(div);
  if (scoreComputer === 5 || scorePlayer === 5) {
    const resultat = document.createElement("div");
    container.append(resultat);
    resultat.classList.add("resultat");
    const final = document.createElement("div");
    let contenu = `Computer's Score: ${scoreComputer} // Player's Score: ${scorePlayer}`;
    final.innerText = contenu;
    final.classList.add("final");
    container.append(final);
    const restart = document.createElement("button");
    restart.textContent = "Restart";
    restart.classList.add("restart");
    container.append(restart);
    restart.addEventListener("click", remove);
  }
}
function remove() {
  scoreComputer = 0;
  scorePlayer = 0;
  const element = document.querySelectorAll(".element");
  const final = document.querySelectorAll(".final");
  const resultat = document.querySelectorAll(".resultat");
  const restart = document.querySelectorAll(".restart");
  for (const el of element) {
    el.parentNode.removeChild(el);
  }
  for (const el of final) {
    el.parentNode.removeChild(el);
  }
  for (const el of resultat) {
    el.parentNode.removeChild(el);
  }
  for (const el of restart) {
    el.parentNode.removeChild(el);
  }
}
