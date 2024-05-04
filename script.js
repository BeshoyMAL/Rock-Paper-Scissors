document.addEventListener("DOMContentLoaded", function() {
  const options = document.querySelectorAll(".btn-option");
  const resetGameBtn = document.getElementById("reset-game");

  options.forEach(option => {
    option.addEventListener("click", function() {
      const playerSelection = option.id;
      const computerSelection = computerPlay();
      displayChoices(playerSelection, computerSelection);
      const result = playRound(playerSelection, computerSelection);
      displayResult(result);
      disableOptions();
    });
  });

  resetGameBtn.addEventListener("click", function() {
    clearGame();
    enableOptions();
  });

  function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

  function displayChoices(playerSelection, computerSelection) {
    const playerChoiceElement = document.getElementById("player-choice");
    playerChoiceElement.textContent = `Your choice: ${playerSelection}`;

    const computerChoiceElement = document.getElementById("computer-choice");
    computerChoiceElement.textContent = `Computer's choice: ${computerSelection}`;
  }

  function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
  }

  function clearGame() {
    const playerChoiceElement = document.getElementById("player-choice");
    playerChoiceElement.textContent = "";

    const computerChoiceElement = document.getElementById("computer-choice");
    computerChoiceElement.textContent = "";

    const resultElement = document.getElementById("result");
    resultElement.textContent = "";

    const gameResultElement = document.getElementById("game-result");
    gameResultElement.textContent = "";
  }

  function disableOptions() {
    options.forEach(option => {
      option.disabled = true;
    });
  }

  function enableOptions() {
    options.forEach(option => {
      option.disabled = false;
    });
  }
});
