const submitBtn = document.getElementById("submit");

let player1 = "";
let player2 = "";

let currentPlayer = "x";
let gameOver = false;

submitBtn.addEventListener("click", () => {

  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names");
    return;
  }

  document.getElementById("player-form").style.display = "none";
  document.getElementById("game").style.display = "block";

  document.querySelector(".message").textContent =
    `${player1}, you're up`;
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {

  cell.addEventListener("click", () => {

    if (cell.textContent !== "" || gameOver) {
      return;
    }

    if (currentPlayer === "x") {
      cell.textContent = "x";
    } else {
      cell.textContent = "o";
    }

    if (checkWinner()) {

      let winnerName =
        currentPlayer === "x" ? player1 : player2;

      document.querySelector(".message").textContent =
        `${winnerName} congratulations you won!`;

      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === "x" ? "o" : "x";

    let nextPlayer =
      currentPlayer === "x" ? player1 : player2;

    document.querySelector(".message").textContent =
      `${nextPlayer}, you're up`;
  });

});

function checkWinner() {

  const winningCombinations = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"]
  ];

  for (let combination of winningCombinations) {

    let [a, b, c] = combination;

    let cellA = document.getElementById(a).textContent;
    let cellB = document.getElementById(b).textContent;
    let cellC = document.getElementById(c).textContent;

    if (
      cellA !== "" &&
      cellA === cellB &&
      cellB === cellC
    ) {
      return true;
    }
  }

  return false;
}