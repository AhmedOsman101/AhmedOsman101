const StartFirstGame = () => {
    if (isFirstGame) {
        isFirstGame = false;
        SGM.classList.replace("hide", "show");
        initGame();
    } else {
        GameVsPlayer();
    }
};

const GameVsPlayer = () => {
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
    initBtns();
    gameReset.classList.add("hide");
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
    initGame();
};

const initBtns = () => {
    resetBtns.forEach((resetBtn) => {
        if (resetBtn.classList.contains("human")) {
            resetBtn.addEventListener("click", resetFunc);
            resetBtn.addEventListener("click", StartFirstGame);
        } else {
        }
    });
};

const GameVsComputer = () => {
    selectSide.classList.replace("show", "hide");
    // initGame();
};
