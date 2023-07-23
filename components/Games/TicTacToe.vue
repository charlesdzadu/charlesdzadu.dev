<template>
	<GamesBase>
		<div v-if="data.gameStarted == true" class="h-[450px] w-[450px]">
			<div id="tictactoeboard"></div>
			<div id="gameinfo"></div>
		</div>
		<div v-else class="h-[450px] w-[450px] flex justify-center items-center">
			<button @click="startGame"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Start Game
			</button>
		</div>
	</GamesBase>
</template>

<script setup>

let gameboard = ref(null);
let gameinfo = ref(null);
let go = "circle";

let data = reactive({
	gameStarted: false,
});


function startGame() {
	data.gameStarted = true;
	// wait for DOM to update
	setTimeout(() => {
		initGame();
	}, 0);
}


function initGame() {
	gameboard = document.getElementById('tictactoeboard');
	gameinfo = document.getElementById('gameinfo');
	gameinfo.innerHTML = "Circle goes first";

	const startCells = [
		"", "", "", "", "", "", "", "", "",
	]
	createBoard(startCells);
}


function createBoard(cells) {
	cells.forEach((_cell, index) => {
		const newCell = document.createElement('div');
		newCell.classList.add('ttt-square');
		newCell.id = index;
		newCell.addEventListener('click', addGo);
		gameboard.appendChild(newCell);
	});
}

function addGo(e) {
	const goDisplay = document.createElement('div');
	goDisplay.classList.add(go);
	e.target.appendChild(goDisplay);
	go = go === "circle" ? "cross" : "circle";
	gameinfo.innerHTML = go === "circle" ? "Circle goes next" : "Cross goes next";
	e.target.removeEventListener('click', addGo);
	checkWin();
}

function checkWin() {
	const squares = Array.from(document.getElementsByClassName('ttt-square'));
	let winCombos = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
		[0, 4, 8], [2, 4, 6] // diagonal
	];

	winCombos.forEach((array) => {
		const circleWin = array.every((index) => squares[index].firstChild?.classList.contains("circle"))
		const crossWin = array.every((index) => squares[index].firstChild?.classList.contains("cross"))
		if (circleWin || crossWin) {
			gameinfo.innerHTML = circleWin ? "Circle wins" : "Cross wins";
			squares.forEach((square) => square.removeEventListener('click', addGo));
			squares.forEach((square) => square.replaceWith(square.cloneNode(true)));
			return;
		} else {
			const allSquaresFilled = squares.every((square) => square.firstChild);
			if (allSquaresFilled) {
				gameinfo.innerHTML = "Draw";
				squares.forEach((square) => square.removeEventListener('click', addGo));
				squares.forEach((square) => square.replaceWith(square.cloneNode(true)));
				return;
			}
		}
	})

}

</script>

<style>
#tictactoeboard {
	height: 450px;
	width: 450px;
	display: flex;
	border: 0px solid black;
	flex-wrap: wrap;
	box-sizing: border-box;
}

.ttt-square {
	width: 150px;
	height: 150px;
	border: 1px solid white;
	display: inline-block;
	/* background-color: white; */
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
}


.circle {
	border-radius: 50%;
	height: 120px;
	width: 120px;
	border: 20px solid #C98BDF;
	box-sizing: border-box;
}


.cross {
	height: 120px;
	width: 120px;
	position: relative;
	transform: rotate(45deg);
}


.cross::before,
.cross::after {
	content: "";
	position: absolute;
	background-color: #FEA55F;
}

.cross::before {
	left: 50%;
	width: 20%;
	margin-left: -10%;
	height: 100%;
}

.cross::after {
	top: 50%;
	height: 20%;
	margin-top: -10%;
	width: 100%;
}
</style>
