console.log("hello world");
const resetBtn = document.querySelector(".reset");
const allBox = document.querySelectorAll(".box");
const player = document.querySelectorAll(".player");
const winnerBox = document.querySelector(".winnerBox");
const winText = document.querySelector(".winText");

winnerBox.style.display = "block";

let currentPlayer = "O";

let emptyArray = [1, 2, 3, 4, 5, 6, 7, 8];

player[0].classList.add("active_player");

const winningCondation = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function activePlayer() {
  if (currentPlayer === "O") {
    player[0].classList.add("active_player");
    player[1].classList.remove("active_player");
  } else {
    player[1].classList.add("active_player");
    player[0].classList.remove("active_player");
  }
}

function winner() {
  winningCondation.forEach((item) => {
    if (
      emptyArray[item[0]] == emptyArray[item[1]] &&
      emptyArray[item[0]] == emptyArray[item[2]] &&
      emptyArray[item[1]] == emptyArray[item[2]]
    ) {
      const winner = emptyArray[item[0]];
      winText.innerText = winner + " " + "is winner";
      winnerBox.style.visibility = "visible";
      setTimeout(() => {
        winText.innerText = "";
        winnerBox.style.visibility = "hidden";
      }, 1000);
      resetBord();
    }
  });
}

function allBoxClick() {
  allBox.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.innerText === "") {
        if (currentPlayer === "O") {
          e.target.innerText = "O";
          emptyArray[e.target.id - 1] = "O";
          winner();
          currentPlayer = "X";
          activePlayer();
        } else {
          e.target.innerText = "X";
          emptyArray[e.target.id - 1] = "X";
          winner();
          currentPlayer = "O";
          activePlayer();
        }
      }
    });
  });
}

allBoxClick();

function resetBord() {
  allBox.forEach((item) => {
    item.innerText = "";
  });
}
resetBtn.addEventListener("click", resetBord);
