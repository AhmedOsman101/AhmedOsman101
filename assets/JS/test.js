const board = document.getElementById("board");
const playerTurn = document.getElementById("playerTurn");
const reset = document.getElementById("reset");
const squares = document.querySelectorAll(".square");

const XElement = `<span class="fa-x"></span>`;
const OElement = `<span class="fa-o"></span>`;
const newGame = `<button class="reset">New Game</button>`;

let circleTurn = false; // it's X turn
let xLocations = [];
let circleLocations = [];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const displayTurns = () => {
    playerTurn.innerHTML = !circleTurn
        ? `Player ${XElement}'s turn`
        : `Player ${OElement}'s turn`;
};

const swapTurns = () => {
    circleTurn = !circleTurn;
};
const clicking = (e) => {
    const currentSquare = e.target;
    currentSquare.innerHTML = !circleTurn ? XElement : OElement;
    if (!circleTurn) {
        xLocations.push(Number(e.target.getAttribute("data-current")));
    } else {
        circleLocations.push(Number(e.target.getAttribute("data-current")));
    }
    swapTurns();
    displayTurns();
    checkWinner();
};

const initGame = () => {
    displayTurns();
    squares.forEach((square) => {
        square.addEventListener("click", clicking, { once: true });
    });
    // reset.addEventListener("click", resetFunc);
};

const checkWinner = () => {
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        if (combo.every((index) => xLocations.includes(index))) {
            playerTurn.innerHTML = `Player ${XElement} won!`;
            return;
        } else if (combo.every((index) => circleLocations.includes(index))) {
            playerTurn.innerHTML = `Player ${OElement} won!`;
            return;
        }
    }
    checkDraw();
};

const checkDraw = () => {
    if (xLocations.length + circleLocations.length == 9) {
        playerTurn.innerHTML = `It's a draw!`;
    }
};

// functions calls

initGame();
