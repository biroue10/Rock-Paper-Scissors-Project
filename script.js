// We are going to build a function which will randomly return ‘Rock’, ‘Paper’ or ‘Scissors’.
const tableau = ["rock","paper","scissors"];
const getComputerChoice = (tableau)=>{
    const randomIndex = Math.floor(Math.random() * tableau.length);
    // get random item
    const item = tableau[randomIndex];
    return item;
}
let answer=""
const playRound = (playerSelection, computerSelection)=>{
    if(playerSelection===computerSelection){
        answer="tie";
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
      answer="you win and computer lost";
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        answer="you lost and computer win";
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        answer="you lost and computer win";
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        answer="you win and computer lost";
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        answer="you win and computer lost";
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        answer="you lost and computer win";
    }
    return answer

}
let playerSelection = prompt("Enter rock paper or scissors")
let computerSelection = getComputerChoice(tableau);
console.log(playRound(playerSelection, computerSelection))
