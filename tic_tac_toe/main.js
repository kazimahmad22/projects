const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restartBtn');

// turn related function

let turn = 'X';
function changeTurn() {
  return turn === 'X' ? 'O' : 'X'; // Corrected '0' to 'O'
}

// check win conditions

let isGameOver = false;
let winner = '';
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winConditions.forEach((e) => {
    if (
      cells[e[0]].innerText !== '' &&
      cells[e[0]].innerText === cells[e[1]].innerText &&
      cells[e[1]].innerText === cells[e[2]].innerText
    ) {
      isGameOver = true;
      winner = cells[e[0]].innerText;
    }
  });
}

// restart game

function restartGame() {
  cells.forEach((e) => {
    e.innerText = '';
  });
  turn = 'X';
  statusText.style.color = 'white';
  statusText.innerText = `Turn is for ${turn}`;
  isGameOver = false;
}
restartBtn.addEventListener('click', restartGame);

// cell clicked method

statusText.innerText = `Turn is for ${turn}`;

function handleCellClick(e) {
  if (isGameOver) {
    // If the game is already over, return without taking any action
    return;
  }

  if (e.target.innerText === '') {
    e.target.innerHTML = turn;
    turn = changeTurn();
    statusText.innerText = `Turn is for ${turn}`;
    checkWin();
    if (isGameOver) {
      statusText.style.color = 'rgb(177, 255, 177)';
      statusText.innerText = winner + ' Won';
    }
  }
}
cells.forEach((e) => {
  e.addEventListener('click', handleCellClick);
});
