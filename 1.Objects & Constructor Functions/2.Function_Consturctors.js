function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const playerOne = new Player("Tim", "X");
const playerTwo = new Player("Jenn", "O");

console.log(playerOne)
console.log(playerTwo)


class Player_Main {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
        this.score = 0;
    }
}

const playerOneMain = new Player("Malik", "X");
const playerTwoMain = new Player("Zara", "O");

console.log(playerOneMain)
console.log(playerTwoMain)