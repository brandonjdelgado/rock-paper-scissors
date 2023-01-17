/*  

Understand

* prompt() will take input from the user: 'rock' 'paper' 'scissors'
* prompt() should be case-insensitive 
* input should be saved into variable playerSelection 
* function getComputerChoice gets computer choice and saved into computerSelection
* function playRound that plays single round returns string that declares
winner of round 
* function game() that calls playRound() and stops after 5 rounds reports
winner/loser 

Plan 

Divide and Conquer 

*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const arr = ['rock', 'paper', 'scissors'];

  return arr[Math.floor(Math.random() * arr.length)];
}