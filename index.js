// display instructions button ?
function displayInstructions() {
  const instructions = document.getElementById("hidden");
  instructions.style.display =
    instructions.style.display === "none" ? "block" : "none";
}

// edit player names button
function editNames() {
  const player1 = prompt("Enter name for Player 1:", "Player 1");
  const player2 = prompt("Enter name for Player 2:", "Player 2");

  if (player1 !== null && player1 !== "") {
    document.getElementById("player1").textContent = player1;
  }
  if (player2 !== null && player2 !== "") {
    document.getElementById("player2").textContent = player2;
  }
}

// set the winning score
let winningScore = 50; // Default winning score

function setScore() {
  const score = prompt("Set the winning score:", "50");
  if (score !== null && score !== "" && !isNaN(score) && Number(score) > 0) {
    winningScore = Number(score);
  } else {
    winningScore = 50; // Default score if no input
  }
  alert(`Winning score set to ${winningScore}`);
}

// restart game button ?
function restartGame() {
  // Reset the score
  document.getElementById("score").textContent = "0";

  // Reset player names
  document.getElementById("player1").textContent = "Player 1";
  document.getElementById("player2").textContent = "Player 2";

  // Hide instructions
  document.getElementById("hidden").style.display = "none";

  // Reset dice images
  document.getElementById("die-1").src = "/images/die-1.jpg";
  document.getElementById("die-2").src = "/images/die-1.jpg";
}

// rolling dice
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

function rollDice() {
  const dice1 = document.getElementById("die-1");
  const dice2 = document.getElementById("die-2");
  const diceImages = [
    "die-1.jpg",
    "die-2.jpg",
    "die-3.jpg",
    "die-4.jpg",
    "die-5.jpg",
    "die-6.jpg",
  ];

  // Add shake animation
  dice1.classList.add("shake");
  dice2.classList.add("shake");

  setTimeout(() => {
    // Remove shake animation after 0.5s
    dice1.classList.remove("shake");
    dice2.classList.remove("shake");

    // Generate random dice values
    const randomValue1 = Math.floor(Math.random() * 6) + 1;
    const randomValue2 = Math.floor(Math.random() * 6) + 1;

    // Change dice images based on random values
    dice1.src = `/images/die-${randomValue1}.jpg`;
    dice2.src = `/images/die-${randomValue2}.jpg`;

    // Calculate the sum of the dice values
    const diceSum = randomValue1 + randomValue2;

    // Assign the score to the current player
    if (currentPlayer === 1) {
      player1Score += diceSum;
      document.getElementById("player1score").textContent = player1Score;
    } else {
      player2Score += diceSum;
      document.getElementById("player2score").textContent = player2Score;
    }
  }, 500); // Duration of the shake animation
}

// switch players
function switchPlayers() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById(
    "current-player"
  ).textContent = `Current Player: Player ${currentPlayer}`;
}

// check the winner
function checkWinner(score, player) {
  if (score >= winningScore) {
    document.getElementById(
      "startGame"
    ).textContent = `${player} wins with a score of ${score}!🥳`;
    setTimeout(restartGame, 5000); // Restart the game after displaying the winning message for 3 seconds
  }
}
