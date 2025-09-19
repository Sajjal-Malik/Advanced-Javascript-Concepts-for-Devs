// example one
const playerOneName = "tim";
const playerTwoName = "Jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// constant variable names
console.log(playerOneName);
console.log(playerOneMarker);

// constant variable markers
console.log(playerTwoName);
console.log(playerTwoMarker);

// example two
const playerOne = {
    name: "tim",
    marker: "X"
}

const playerTwo = {
    name: "Jenn",
    marker: "O"
}

// constant objectName.name and objectName.marker  (property)
console.log(playerOne.name);
console.log(playerOne.marker);
console.log(playerTwo.name);
console.log(playerTwo.marker);


function printNameWithNormalFunc(player) {
    console.log(player.name)
}

const printNameWithArrowFunc = (player) => {
    console.log(player.name)
}

// Passing object as Function parameter to Get their name: property's value
printNameWithNormalFunc(playerOne);
printNameWithArrowFunc(playerTwo);