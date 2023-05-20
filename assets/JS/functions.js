const resetFunc = () => {
    board.innerHTML = "";
    createBoard();
    currentTurn = "x";
    circleTurn = false;
    isDraw = false;
    isWon = false;
    xLocations = [];
    circleLocations = [];
    displayTurns();
    winningMessage.style.display = "none";
    reset.style.display = "block";
};

const displayTurns = () => {
    squares = document.querySelectorAll(".square");
    playerTurn.innerHTML = "";
    if (!circleTurn) {
        currentTurn = "x";
        circleTurn = true;
        playerTurn.innerHTML = `Player ${XElement}'s turn`;
    } else {
        currentTurn = "o";
        circleTurn = false;
        playerTurn.innerHTML = `Player ${OElement}'s turn`;
    }
};
const createBoard = () => {
    for (let i = 0; i < 9; i++) {
        const squareElement = `<div class="square" data-current="${i}"></div>`;
        board.innerHTML += squareElement;
    }
    squares = document.querySelectorAll(".square");
    squares.forEach((element) => {
        element.addEventListener(
            "click",
            () => {
                element.innerHTML = currentTurn == "x" ? XElement : OElement;
                if (circleTurn) {
                    xLocations.push(
                        Number(element.getAttribute("data-current"))
                    );
                } else {
                    circleLocations.push(
                        Number(element.getAttribute("data-current"))
                    );
                }
                displayTurns();
                checkWinner();
            },
            { once: true }
        );
    });
};

const checkWinner = () => {
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        if (combo.every((index) => xLocations.includes(index))) {
            playerTurn.innerHTML = `Player ${XElement} won!`;
            disableSquares(XElement);
            isDraw = false;
            isWon = true;
            break;
        } else if (combo.every((index) => circleLocations.includes(index))) {
            playerTurn.innerHTML = `Player ${OElement} won!`;
            disableSquares(OElement);
            isDraw = false;
            isWon = true;
            break;
        }
    }
    if (
        xLocations.length + circleLocations.length == squares.length &&
        isWon == false
    ) {
        isDraw = true;
        disableSquares("It's a draw!");
    } else {
        console.log("thereIsNoWinner");
    }
};

const disableSquares = (winner) => {
    const winningMessage = document.getElementById("winningMessage");
    if (isDraw == true) {
        winningMessage.innerHTML = `${winner}
        ${newGame}`;
    } else {
        winningMessage.innerHTML = `
        Player ${winner} won!
        ${newGame}`;
    }
    document.querySelector(".reset").addEventListener("click", resetFunc);
    winningMessage.style.display = "grid";
    reset.style.display = "none";
    xLocations = [];
    circleLocations = [];
};
