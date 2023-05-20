const displayTurns = () => {
    playerTurn.innerHTML = !circleTurn
        ? `Player ${XElement}'s turn`
        : `Player ${OElement}'s turn`;
};

const swapTurns = () => {
    circleTurn = !circleTurn;
};

const clicking = (e) => {
    const currentSquare = e.target;
    currentSquare.innerHTML = !circleTurn ? XElement : OElement;
    if (!circleTurn) {
        xLocations.push(Number(e.target.getAttribute("data-current")));
    } else {
        circleLocations.push(Number(e.target.getAttribute("data-current")));
    }
    swapTurns();
    displayTurns();
    checkWinner();
};

const initGame = () => {
    displayTurns();
    mainSGM.classList.remove("hide");
    mainSGM.classList.add("show");
    mainSGM.append(SGMBcopy);
    mainSGMB.classList.add("hide");
    squares.forEach((square) => {
        square.innerHTML = "";
        square.addEventListener("click", clicking, { once: true });
    });
    // reset.addEventListener("click", resetFunc);
};

const checkWinner = () => {
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        if (combo.every((index) => xLocations.includes(index))) {
            playerTurn.innerHTML = `Player ${XElement} won!`;
            showEndMessage(XElement);
            return;
        } else if (combo.every((index) => circleLocations.includes(index))) {
            playerTurn.innerHTML = `Player ${OElement} won!`;
            showEndMessage(OElement);
            return;
        }
    }
    checkDraw();
};

const checkDraw = () => {
    if (xLocations.length + circleLocations.length == 9) {
        isDraw = true;
        playerTurn.innerHTML = `It's a draw!`;
        showEndMessage("It's a draw!");
    }
};

const showEndMessage = (winner) => {
    const winningMessage = document.getElementById("winningMessage");
    winningMessage.innerHTML =
        isDraw == true ? `${winner}` : `Player${winner} won!`;
    winningMessage.classList.remove("hide");
    winningMessage.classList.add("show");
};

const resetFunc = () => {
    circleTurn = false;
    isDraw = false;
    xLocations = [];
    circleLocations = [];
    initGame();
    winningMessage.style.display = "none";
};
