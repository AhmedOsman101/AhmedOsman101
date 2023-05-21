const playerTurn = document.getElementById("playerTurn");
const squares = document.querySelectorAll(".square");
const displayScore = document.getElementById("displayScore");
let resetBtns = document.querySelectorAll(".reset");

const SGM = document.querySelector("#select-game-mode"); // the SGM div
const winningMessage = document.getElementById("winningMessage");
const selectSideBtn = document.querySelector("#select-game-mode .btn-group"); // the SGM div Btns
const gameReset = document.querySelector(".main-btn"); // the bottom button

const XElement = `<span class="fa-x"></span>`;
const OElement = `<span class="fa-o"></span>`;
let isFirstGame = true;
let circleTurn = false; // it's X turn
let isDraw = false;
let xLocations = [];
let circleLocations = [];
let playerXscore = 0;
let playerOscore = 0;

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
StartFirstGame();
