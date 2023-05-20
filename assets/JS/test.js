const board = document.getElementById("board");
const playerTurn = document.getElementById("playerTurn");
const reset = document.getElementById("reset");
const squares = document.querySelectorAll(".square");

const XElement = `<span class="fa-x"></span>`;
const OElement = `<span class="fa-o"></span>`;
const newGame = `<button class="reset">New Game</button>`;

let isDraw = false;
let isWon = false;
let circleTurn = false; // it's X turn
let currentTurn = "x"; // it's X turn
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

squares.forEach((square) => {
    square.addEventListener("click", clicking, { once: true });
});

const clicking = (e) => {
    const currentSquare = e.target;
    console.log(currentSquare);
    // currentSquare.innerHTML = currentTurn == "x" ? XElement : OElement;
    if (circleTurn) {
        xLocations.push(Number(e.target.getAttribute("data-current")));
    } else {
        circleLocations.push(Number(e.target.getAttribute("data-current")));
    }
    // displayTurns();
    // checkWinner();
};

// functions calls
// reset.addEventListener("click", resetFunc);
// displayTurns();
