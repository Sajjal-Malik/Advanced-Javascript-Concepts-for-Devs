// Basic arrow function
const myFunction = (param1, param2) => {
    // function body
    return result;
};

// Arrow function with implicit return (single expression)
const add = (a, b) => a + b;

// Arrow function with a single parameter (parentheses optional)
const greet = name => `Hello, ${name}!`;

// Arrow function with no parameters
const sayHello = () => "Hello!";




// Lexical this Binding
class MyClass {
    constructor() {
        this.value = 10;
    }

    // Traditional function: 'this' would be the button element
    // unless explicitly bound
    traditionalMethod() {
        document.getElementById("btn").addEventListener("click", function () {
            console.log(this.value); // undefined or button element
        });
    }

    // Arrow function: 'this' refers to the MyClass instance
    arrowMethod() {
        document.getElementById("btn").addEventListener("click", () => {
            console.log(this.value); // 10
        });
    }
}