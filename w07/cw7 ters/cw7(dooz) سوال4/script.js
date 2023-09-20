const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const reset = document.querySelector("#btnid");
let currentPlayer = "X";
let gameOver = false;

// Add event listeners to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", makeMove);
});

// Function to handle a move by the player
function makeMove(e) {
  if (gameOver) return;
  if (e.target.textContent !== "") return;

  e.target.textContent = currentPlayer;
  e.target.style.cursor = "not-allowed";

  if (checkWinner()) {
    message.textContent = `${currentPlayer} wins!`;
    gameOver = true;
    return;
  }

  if (checkTie()) {
    message.textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (!gameOver && currentPlayer === "O") {
    makeComputerMove();
  }
}

// Function to make a random move by the computer
function makeComputerMove() {
  const emptyCells = Array.from(cells).filter(
    (cell) => cell.textContent === ""
  );

  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    cell.textContent = currentPlayer;
    cell.style.cursor = "not-allowed";

    if (checkWinner()) {
      message.textContent = `${currentPlayer} wins!`;
      gameOver = true;
      return;
    }

    if (checkTie()) {
      message.textContent = "It's a tie!";
      gameOver = true;
      return;
    }

    currentPlayer = "X";
  }
}

// Function to check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      cells[a].style.backgroundColor = "lightgreen";
      cells[b].style.backgroundColor = "lightgreen";
      cells[c].style.backgroundColor = "lightgreen";
      cells.forEach((cell) => cell.removeEventListener("click", makeMove));
      return true;
    }
  }

  return false;
}

// Function to check for a tie
function checkTie() {
  let tie = true;

  cells.forEach((cell) => {
    if (cell.textContent === "") {
      tie = false;
    }
  });

  return tie;
}
