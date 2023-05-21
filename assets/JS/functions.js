const displayTurns = () => {
    playerTurn.innerHTML = `Player ${!circleTurn ? XElement : OElement}'S turn`;
    displayScore.innerHTML = `${XElement}: ${playerXscore} - ${playerOscore} :${OElement}`;
};

const swapTurns = () => {
    circleTurn = !circleTurn;
};

const getCurrentData = (e) => Number(e.target.getAttribute("data-current"));

const checkWinner = () => {
    for (const combo of winningCombos) {
        if (combo.every((index) => xLocations.includes(index))) {
            playerXscore++;
            displayTurns();
            setTimeout(showEndMessage, 100, XElement);
            return;
        } else if (combo.every((index) => circleLocations.includes(index))) {
            playerOscore++;
            displayTurns();
            setTimeout(showEndMessage, 100, OElement);
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
        setTimeout(showEndMessage, 100, "It's a draw!");
    }
};

const showEndMessage = (winner) => {
    SGM.classList.replace("hide", "show");
    winningMessage.classList.replace("hide", "show");
    winningMessage.innerHTML = isDraw ? winner : `Player ${winner} won!`;
};
