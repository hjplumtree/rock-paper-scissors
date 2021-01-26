function computerPlay() {
  const hands = ["Rock", "Paper", "Scissors"];
  // computer decides rock, paper, scissors randomly
  const randNum = Math.floor(Math.random() * hands.length)
  // return it
  return hands[randNum];
}

function changeToEmoji(player, com) {
  switch(player){
    case 'Rock':
      document.querySelector('#playerShow').textContent = '🗿';
      break;
    case 'Paper':
      document.querySelector('#playerShow').textContent = '📖';
      break;
    case 'Scissors':
      document.querySelector('#playerShow').textContent = '🦞';
      break;
  }
  switch(com){
    case 'Rock':
      document.querySelector('#comShow').textContent = '🗿';
      break;
    case 'Paper':
      document.querySelector('#comShow').textContent = '📖';
      break;
    case 'Scissors':
      document.querySelector('#comShow').textContent = '🦞';
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  // Make Lowercase and store them respectively
  let player = playerSelection;
  let computer = computerSelection;
  changeToEmoji(player, computer)
  // If player and computer are same, Draw
  if(player === computer) { return "DRAW, Both are " + player }
  // If player is rock and computer is scissors, player Win and says "Rock beats Scissors", else player Lose and says "Paper beats Rock"
  if(player === "Rock") {
    if(computer === "Scissors") {
      return "You Win! Rock beats Scissors"
    } else {
      return "You Lose! Paper beats Rock"
    }
  }
  // If player is paper and computer is rock, player Win and says "Paper beats Rock", else player Lose and says "Scissors beats Paper"
  if(player === "Paper") {
    if(computer === "Rock") {
      return "You Win! Paper beats Rock"
    } else {
      return "You Lose! Scissors beat Paper"
    }
  }
  // If player is scissors and computer is paper, player Win and says "Scissors beats Paper", else player Lose and says "Rock beats Scissors"
  if(player === "Scissors") {
    if(computer === "Paper") {
      return "You Win! Scissors beat Paper"
    } else {
      return "You Lose! Rock beats Scissors"
    }
  }
  return "Something wrong";
}




let playerChoose;
let comChoose;
let playerScore = 0, comScore = 0;
let winner;

const playerHands = document.querySelectorAll('.pHand');
playerHands.forEach(hand => {
  hand.addEventListener('click', (e) => {  
    playerChoose = e.target.id.slice(6);
    comChoose = computerPlay();
    // document.querySelector('#playerShow').textContent = playerChoose;
    // document.querySelector('#comShow').textContent = comChoose;

    let whoWon = playRound(playerChoose, comChoose);
    document.querySelector('.result').textContent = whoWon;

    if(whoWon.slice(4, 5) == 'W') {
      playerScore++;
    } else if(whoWon.slice(4, 5) == 'L') {
      comScore++;
    }
    document.querySelector('.score').textContent = `${playerScore} : ${comScore}`

    if(playerScore === 5) {
      winner = 'You'
      stopGame();
    } else if(comScore === 5) {
      winner = 'A.I.'
      stopGame();

    }
  })
})

function stopGame() {
  alert('game over! ' + winner + ' Won')
}
