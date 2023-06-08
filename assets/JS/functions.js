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
	randomNumber = Math.floor(Math.random() * 3);
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
		} else if (resetBtn.getAttribute("data-opponent") === "random") {
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
	randomNumber = Math.floor(Math.random() * 3);
	console.log(randomNumber);
	resetBtns[randomNumber].click();
};

function displayTurns() {
	playerTurn.innerHTML = `Player ${!circleTurn ? XElement : OElement}'S turn`;
	displayScore.innerHTML = `${XElement}: ${playerXscore} - ${playerOscore} :${OElement}`;
}

const swapTurns = () => (circleTurn = !circleTurn);

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
