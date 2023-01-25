let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');

const score = document.querySelector('#score');
score.textContent = `you: ${playerScore} com: ${computerScore}`;

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play again';
playAgainBtn.addEventListener('click', playAgain);

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
  if (playerScore === 5) {
    results.textContent = 'Final Win';
    buttons.forEach((button) => button.disabled = true);
    document.body.appendChild(playAgainBtn);
  } else if (computerScore === 5) {
    results.textContent = 'Final Lose';
    buttons.forEach((button) => button.disabled = true);
    document.body.appendChild(playAgainBtn);
  }
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  score.textContent = `you: ${playerScore} com: ${computerScore}`;
  results.textContent = '';
  buttons.forEach((button) => button.disabled = false);
  document.body.removeChild(playAgainBtn);
}