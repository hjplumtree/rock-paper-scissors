
function computerPlay() {
  const hands = ["rock", "paper", "scissors"];
  // computer decides rock, paper, scissors randomly
  const randNum = Math.floor(Math.random() * hands.length)
  // return it
  return hands[randNum];
}

// console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
  // Make Lowercase and store them respectively
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  let result = "NOT WORKING";
  // If player and computer are same, Draw
  if(player === computer) return ("DRAW, Both are " + player)
  // If player is rock and computer is scissors, player Win and says "Rock beats Scissors", else player Lose and says "Paper beats Rock"
  if(player === "rock") {
    if(computer === "scissors") {
      result = "You Win! Rock beats Scissors"
    } else {
      result = "You Lose! Paper beats Rock"
    }
  }
  // If player is paper and computer is rock, player Win and says "Paper beats Rock", else player Lose and says "Scissors beats Paper"
  if(player === "paper") {
    if(computer === "rock") {
      result = "You Win! Paper beats Rock"
    } else {
      result = "You Lose! Scissors beat Paper"
    }
  }
  // If player is scissors and computer is paper, player Win and says "Scissors beats Paper", else player Lose and says "Rock beats Scissors"
  if(player === "scissors") {
    if(computer === "paper") {
      result = "You Win! Scissors beat Paper"
    } else {
      result = "You Lose! Rock beats Scissors"
    }
  }
  return result;
}

let playerSelection;
let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
function game() {
let playerScore = 0;
let comScore = 0;
let final;
  // it's a 5 round play
  for(let i = 0; i < 5; i++) {
    // computer selects but don't show yet
    computerSelection = computerPlay();
  
    // player tells, only rock or paper or scissors
    let wrong = true;
    while(wrong) {
      temp = prompt("Chooes between Rock, Paper, Scissors").toLowerCase()
      if(temp === "rock" || temp === "paper" || temp === "scissors") {
        wrong = false;
      }
    }
    playerSelection = temp;
    // compare through playRound function
    let whoWon = playRound(playerSelection, computerSelection);
    if(whoWon.slice(4, 5) === "W") { playerScore++ }
    else if(whoWon.slice(4, 5) === "L") { comScore++ }
    
    // console every time the result and keeps score respectively
    console.log(whoWon, playerScore, comScore)
  }
  
  // when 5 round ends, compare player score and computer score and find winnter 
  if(playerScore > comScore) { final = `You are the champion! You: ${playerScore}, Computer: ${comScore}` }
  else if(playerScore < comScore) { final = `Computer is the champion! You: ${playerScore}, Computer: ${comScore}` }
  else { final = `it was neck and neck match! You: ${playerScore}, Computer: ${comScore}` }
  console.log(final);
}
game();