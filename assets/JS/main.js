const playerTurn = document.getElementById("playerTurn");
const squares = document.querySelectorAll(".square");
const mainSGMB = document.querySelector(".main-btn .btn-group"); // the first button
const mainSGM = document.querySelector("#select-game-mode"); // the SGM div
const subSGMB = document.querySelector("#select-game-mode .btn-group");
const SGMBcopy = mainSGMB.cloneNode(true);
let resetBtns = document.querySelectorAll(".reset");

const XElement = `<span class="fa-x"></span>`;
const OElement = `<span class="fa-o"></span>`;
const newGame = `<button class="reset">New Game</button>`;

let isDraw = false;
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

// call the initGame function to start the game
initGame();
