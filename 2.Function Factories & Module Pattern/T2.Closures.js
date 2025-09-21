function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter = makeCounter();  // function is being return so 'counter' becomes a function now

console.log(counter());  // count = 0
console.log(counter());  // count = 1
console.log(counter());  // count = 2
console.log(counter());  // count = 3
console.log(counter());  // count = 4
console.log(counter());  // count = 5


function outerFunction(x) {
    return function(y) {
        return x + y
    }
}

// function is being return so 'innerFunction' becomes a function now accepting parameter
let innerFunction = outerFunction(6);  // outer function accepts value of x

console.log(innerFunction(5));  // innerfunction accepts value of y   -- so we get '11' output as return of sum x + y