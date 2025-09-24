// Example in Function Parameters:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


//  Example in Array Destructuring.
const [first, ...restOfArray] = [10, 20, 30, 40];
console.log(first); // Output: 10
console.log(restOfArray); // Output: [20, 30, 40]