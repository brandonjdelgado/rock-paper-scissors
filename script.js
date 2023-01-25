let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');

const score = document.querySelector('#score');
score.textContent = `you: ${playerScore} com: ${computerScore}`;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playRound)
})

function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors'];

  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  getComputerChoice();

  if (playerSelection === computerSelection) {
    results.textContent = `tie! ${playerSelection} ties with ${computerSelection}`;
  } else if 
    (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    results.textContent = `win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    results.textContent = `lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  score.textContent = `you: ${playerScore} com: ${computerScore}`;
  game();
}

function game() {
}