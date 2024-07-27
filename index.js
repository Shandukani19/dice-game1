let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let player1Name = "Player 1"; // Default name for Player 1
let player2Name = "Player 2"; // Default name for Player 2
let winningScore = 50; // Default winning score

// display instructions button
function displayInstructions() {
  const instructions = document.getElementById("hidden");
  instructions.style.display =
    instructions.style.display === "none" ? "block" : "none";
}

// close instructions
function closeInstructions() {
  let gameInstructions = document.getElementById("hidden");
  gameInstructions.style.display = "none";
}

// edit player names button
function editNames() {
  const player1 = prompt("Enter name for Player 1:", player1Name);
  const player2 = prompt("Enter name for Player 2:", player2Name);

  if (player1 !== null && player1 !== "") {
    player1Name = player1;
    document.getElementById("player1").textContent = player1Name;
  }
  if (player2 !== null && player2 !== "") {
    player2Name = player2;
    document.getElementById("player2").textContent = player2Name;
  }
}

// set the winning score
function setScore() {
  const score = prompt("Set the winning score:", "50");
  if (score !== null && score !== "" && !isNaN(score) && Number(score) > 0) {
    winningScore = Number(score);
  } else if (isNaN(score) || score <= 0) {
    alert("Please enter a valid positive number");
    return;
  } else {
    winningScore = 50; // Default score if no input
  }
  alert(`Winning score set to ${winningScore}`);
}

// restart game button
function restartGame() {
  // Reset the score
  player1Score = 0;
  player2Score = 0;

  // Reset the displayed scores
  document.getElementById("player1score").textContent = "0";
  document.getElementById("player2score").textContent = "0";

  // Reset the player names
  player1Name = "Player 1";
  player2Name = "Player 2";

  // Reset displayed player names
  document.getElementById("player1").textContent = "Player 1";
  document.getElementById("player2").textContent = "Player 2";

  // Hide instructions
  document.getElementById("hidden").style.display = "none";

  // Reset dice images
  document.getElementById("die-1").src = "/images/die-1.jpg";
  document.getElementById("die-2").src = "/images/die-1.jpg";

  // Reset the start game message
  document.getElementById("startGame").textContent = "Let's Play!";

  // reset current player
  currentPlayer = 1;
  document.getElementById("current-player").textContent =
    "Current Player: Player 1";
}

// rolling dice
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
      checkWinner(player1Score, player1Name); // Check if Player 1 is the winner
    } else {
      player2Score += diceSum;
      document.getElementById("player2score").textContent = player2Score;
      checkWinner(player2Score, player2Name); // Check if Player 2 is the winner
    }
  }, 500); // Duration of the shake animation
}

// switch players
function switchPlayers() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("current-player").textContent = `Current Player: ${
    currentPlayer === 1 ? player1Name : player2Name
  }`;
}

// check the winner
function checkWinner(score, playerName) {
  if (score >= winningScore) {
    document.getElementById(
      "startGame"
    ).textContent = `${playerName} wins with a score of ${score}!🥳`;
    setTimeout(restartGame, 20000); // Restart the game after displaying the winning message for 20 seconds
  }
}
