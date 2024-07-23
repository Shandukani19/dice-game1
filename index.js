// display instructions button
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

// restart game button
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

    // Change dice images randomly

    const randomDice1 =
      diceImages[Math.floor(Math.random() * diceImages.length)];
    const randomDice2 =
      diceImages[Math.floor(Math.random() * diceImages.length)];
    dice1.src = `/images/${randomDice1}`;
    dice2.src = `/images/${randomDice2}`;
  }, 500); // Duration of the shake animation
}
