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
    // gameReset.classList.add("hide");
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
    gameReset.classList.replace("hide", "show");
};

const initBtns = () => {
    resetBtns.forEach((resetBtn) => {
        if (resetBtn.classList.contains("human")) {
            resetBtn.addEventListener("click", resetFunc);
            resetBtn.addEventListener("click", StartFirstGame);
        } else if (resetBtn.getAttribute("data-opponent") === "computer") {
            // resetBtn.addEventListener("click", resetFunc);
            resetBtn.addEventListener("click", GameVsComputer);
        } else {
            // resetBtn.addEventListener("click", resetFunc);
            resetBtn.addEventListener("click", RandomGame);
        }
    });
};

const GameVsComputer = () => {
    SGMBtns.classList.replace("show", "hide");
    selectSide.classList.replace("hide", "show");
    // initGame();
};

const RandomGame = () => {
    console.log("Random Game");
};
