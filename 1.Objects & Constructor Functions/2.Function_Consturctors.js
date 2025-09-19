function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const playerOne = new Player("Tim", "X");
const playerTwo = new Player("Jenn", "O");

console.log("Function Constucted Player One: ",playerOne);
console.log("Function Constucted Player Two: ",playerTwo);


class Player_Main {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
        this.score = 0;
    }
}

const playerOneMain = new Player("Malik", "X");
const playerTwoMain = new Player("Zara", "O");

console.log("Class Constucted Player One Main: ",playerOneMain);
console.log("Class Constucted Player Tow Main: ",playerTwoMain);