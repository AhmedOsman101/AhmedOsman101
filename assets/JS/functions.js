const displayTurns = () => {
    playerTurn.innerHTML = `Player ${!circleTurn ? XElement : OElement}'s turn`;
};

const swapTurns = () => {
    circleTurn = !circleTurn;
};

const getCurrentData = (e) => Number(e.target.getAttribute("data-current"));

const clicking = (e) => {
    const currentSquare = e.target;
    currentSquare.innerHTML = !circleTurn ? XElement : OElement;
    const currentData = getCurrentData(e);
    (!circleTurn ? xLocations : circleLocations).push(currentData);
    swapTurns();
    displayTurns();
    checkWinner();
};

const initGame = () => {
    displayTurns();
    mainSGM.classList.replace("hide", "show");
    mainSGM.append(SGMBcopy);
    mainSGMB.classList.add("hide");
    squares.forEach((square) => {
        square.innerHTML = "";
        square.addEventListener("click", clicking, { once: true });
    });
};

const checkWinner = () => {
    for (const combo of winningCombos) {
        if (combo.every((index) => xLocations.includes(index))) {
            showEndMessage(XElement);
            return;
        } else if (combo.every((index) => circleLocations.includes(index))) {
            showEndMessage(OElement);
            return;
        }
    }
    checkDraw();
};

const checkDraw = () => {
    if (xLocations.length + circleLocations.length === 9) {
        isDraw = true;
        showEndMessage("It's a draw!");
    }
};

const showEndMessage = (winner) => {
    const winningMessage = document.getElementById("winningMessage");
    winningMessage.innerHTML = isDraw ? winner : `Player ${winner} won!`;
    winningMessage.classList.replace("hide", "show");
};

const resetFunc = () => {
    circleTurn = false;
    isDraw = false;
    xLocations = [];
    circleLocations = [];
    initGame();
    winningMessage.style.display = "none";
};
