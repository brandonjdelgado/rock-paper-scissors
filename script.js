let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors'];

  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound() {
  let playerSelection = prompt('Choose wisely...');
  playerSelection = playerSelection.toLowerCase();

  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log(`tie! ${playerSelection} ties with ${computerSelection}`);
  } else if 
  (playerSelection === 'rock' && computerSelection === 'scissors' ||
  playerSelection === 'paper' && computerSelection === 'rock' ||
  playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log(`win! ${playerSelection} beats ${computerSelection}`)
    playerScore++;
  } else {
    console.log(`lose! ${computerSelection} beats ${playerSelection}`)
    computerScore++;
  }
  console.log(`you: ${playerScore} com: ${computerScore}`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  console.log('final');

  if (playerScore > computerScore) {
    console.log('you win');
  } else {
    console.log('you lose');
  }
}

game();