function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("Alice"); // Calling the function
console.log(message); // Output: Hello, Alice!


function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10


// Constructor functions: Normal functions can be used as constructor functions with the new keyword to create new objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Alice", 30);