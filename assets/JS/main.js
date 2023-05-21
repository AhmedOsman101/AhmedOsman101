const playerTurn = document.getElementById("playerTurn");
const squares = document.querySelectorAll(".square");
const displayScore = document.getElementById("displayScore");
let resetBtns = document.querySelectorAll(".reset");

const selectSideBtn = document.querySelector("[data-side]");
const SGM = document.querySelector("#select-game-mode"); // the SGM div
const SGMBtns = document.querySelector("#select-game-mode #SGMBtns"); // the SGM div buttons
const winningMessage = document.getElementById("winningMessage"); // the winningMessage
const selectSide = document.querySelector("#selectSide"); // the SelectSide div
const gameReset = document.querySelector(".main-btn"); // the bottom button

const XElement = `<span class="fa-x"></span>`;
const OElement = `<span class="fa-o"></span>`;
let isFirstGame = true;
let circleTurn = false; // it's X turn
let isDraw = false;
let xLocations = [];
let circleLocations = [];
let playerXscore = 0;
let computerXscore = 0;
let playerOscore = 0;
let computerOscore = 0;

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
