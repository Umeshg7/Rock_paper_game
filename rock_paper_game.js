/*
Rock-paper-scissors game code with functions for move generation,
determining the winner, updating display, showing results, and
game reset. Custom messages for outcomes. Event listeners for 
game buttons.To play, click on rock, paper, or scissors buttons. 
Rules: rock beats scissors, scissors beat paper, paper beats rock.
Resetting the game clears display and can be extended. Event listeners
trigger game logic, updating display with player's move, computer's move,
and result using updateMoveDisplay and showResultPage functions.*/


// Function to generate a random computer move
function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
  }
  
  // Function to determine the winner
  function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      return tieMsg; // Use tieMsg for tie
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) {
      return winMsg; // Use winMsg for player win
    } else {
      return loseMsg; // Use loseMsg for player defeat
    }
  }
  
  // Function to update the move display
  function updateMoveDisplay(playerMove, computerMove, result) {
    const moveDisplay = document.querySelector('.move-display');
    moveDisplay.innerHTML = `
      <p>You chose: ${playerMove}</p>
      <p>Computer chose: ${computerMove}</p>
    `;
  }
  
  // Function to display the winner or defeat page
  function showResultPage(result) {
    const statusHead = document.getElementById('status-head');
    statusHead.innerText = result;
  
    if (result === loseMsg) {
      const playAgainButton = document.createElement('button');
      playAgainButton.innerText = 'Play Again';
      playAgainButton.addEventListener('click', resetGame);
      moveDisplay.appendChild(playAgainButton);
    }
  }
  
  // Function to reset the game
  function resetGame() {
    const moveDisplay = document.querySelector('.move-display');
    moveDisplay.innerHTML = '';
    statusHead.innerText = '';
  
    // Add your additional reset logic here
  }
  
  // Customized messages
  let winMsg = 'Victory';
  let loseMsg = ' Defeat';
  let tieMsg = 'Tie';
  
  // Event listeners for game buttons
  document.getElementById('rock-button').addEventListener('click', function() {
    const playerMove = 'rock';
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    updateMoveDisplay(playerMove, computerMove, result);
    showResultPage(result);
  });
  
  document.getElementById('paper-button').addEventListener('click', function() {
    const playerMove = 'paper';
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    updateMoveDisplay(playerMove, computerMove, result);
    showResultPage(result);
  });
  
  document.getElementById('scissors-button').addEventListener('click', function() {
    const playerMove = 'scissors';
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    updateMoveDisplay(playerMove, computerMove, result);
    showResultPage(result);
  });
  