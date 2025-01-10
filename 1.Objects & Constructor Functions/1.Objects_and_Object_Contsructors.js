// example one
const playerOneName = "tim";
const playerTwoName = "Jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "Jenn",
    marker: "O"
}

function printNameF(player){
    console.log(player.name)
}

const printNameC = (player) => {
    console.log(player.name)
}

printNameF(playerOne);
printNameC(playerTwo);