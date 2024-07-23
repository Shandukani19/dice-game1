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
