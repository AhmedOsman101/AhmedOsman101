const displayTurns = () => {
    playerTurn.innerHTML = `Player ${!circleTurn ? XElement : OElement}'S turn`;
    displayScore.innerHTML = `${XElement}: ${playerXscore} - ${playerOscore} :${OElement}`;
};

const swapTurns = () => {
    circleTurn = !circleTurn;
};

const getCurrentData = (e) => Number(e.target.getAttribute("data-current"));

// const initBtns = () => {
//     resetBtns.forEach((resetBtn) => {
//         if (resetBtn.classList.contains("human")) {
//             resetBtn.addEventListener("click", resetFunc);
//             resetBtn.addEventListener("click", resetFunc);
//         }
//     });
// };

// const StartFirstGame = () => {
//     if (isFirstGame) {
//         isFirstGame = false;
//         SGM.classList.replace("hide", "show");
//     } else {
//         StartNewGame();
//     }
//     initGame();
// };

// const StartNewGame = () => {
//     SGM.classList.replace("show", "hide");
// };

// const clicking = (e) => {
//     const currentSquare = e.target;
//     currentSquare.innerHTML = !circleTurn ? XElement : OElement;
//     const currentData = getCurrentData(e);
//     (!circleTurn ? xLocations : circleLocations).push(currentData);
//     swapTurns();
//     displayTurns();
//     checkWinner();
// };

// const initGame = () => {
//     displayTurns();
//     gameReset.classList.add("hide");
//     resetBtns.forEach((resetBtn) => {
//         resetBtn.addEventListener("click", resetFunc);
//     });
//     squares.forEach((square) => {
//         square.innerHTML = "";
//         square.addEventListener("click", clicking, { once: true });
//     });
// };

const checkWinner = () => {
    for (const combo of winningCombos) {
        if (combo.every((index) => xLocations.includes(index))) {
            playerXscore++;
            displayTurns();
            setTimeout(showEndMessage, 2000, XElement);
            return;
        } else if (combo.every((index) => circleLocations.includes(index))) {
            playerOscore++;
            displayTurns();
            setTimeout(showEndMessage, 2000, OElement);
            return;
        }
    }
    checkDraw();
};

const checkDraw = () => {
    if (xLocations.length + circleLocations.length === 9) {
        isDraw = true;
        playerXscore += 0.5;
        playerOscore += 0.5;
        displayTurns();
        setTimeout(showEndMessage, 2000, "It's a draw!");
    }
};

const showEndMessage = (winner) => {
    SGM.classList.replace("hide", "show");
    winningMessage.innerHTML = isDraw ? winner : `Player ${winner} won!`;
    winningMessage.classList.replace("hide", "show");
};

// const resetFunc = () => {
//     circleTurn = false;
//     isDraw = false;
//     xLocations = [];
//     circleLocations = [];
//     initGame();
//     winningMessage.style.display = "none";
// };
