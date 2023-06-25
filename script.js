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
const game = () => {
  let playerSelection = "";
  while (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    playerSelection = prompt("Enter rock paper or scissors: ");
  }
  let computerSelection = getComputerChoice(tableau);
  console.log(playRound(playerSelection, computerSelection));
};
// running the game function five times
let compteur = 0;
while (compteur < 6) {
  game();
  compteur++;
  if (compteur === 5) {
    let again = prompt("Do you want to play again? : ");
    again = again.toLowerCase();
    if (again === "yes") {
      compteur = 0;
      game();
    } else {
        if(scoreComputer>scorePlayer){
            console.log(`Computer wins!\n Computer's Score: ${scoreComputer} Player's Score: ${scorePlayer}`)
        }
        else if(scoreComputer>scorePlayer){
            console.log(`Player wins!\n Player's Score: ${scoreComputer} Computer's Score: ${scorePlayer}`)
        }
        else{
            console.log(`It's a draw!\n Player's Score: ${scoreComputer} Computer's Score: ${scorePlayer}`)
        }
      break;
    }
  }
}
