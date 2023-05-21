const initBtns = () => {
    resetBtns.forEach((resetBtn) => {
        resetBtn.addEventListener("click", StartFirstGame);
    });
};

const StartFirstGame = () => {
    if (isFirstGame) {
        isFirstGame = false;
        SGM.classList.replace("hide", "show");
        initGame();
    } else {
        StartNewGame();
    }
};

const StartNewGame = () => {
    SGM.classList.replace("show", "hide");
    resetFunc();
};

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
    gameReset.classList.add("hide");
    resetBtns.forEach((resetBtn) => {
        resetBtn.addEventListener("click", resetFunc);
    });
    squares.forEach((square) => {
        square.innerHTML = "";
        square.addEventListener("click", clicking, { once: true });
    });
};

const resetFunc = () => {
    circleTurn = false;
    isDraw = false;
    xLocations = [];
    circleLocations = [];
    winningMessage.style.display = "none";
    initGame();
};
