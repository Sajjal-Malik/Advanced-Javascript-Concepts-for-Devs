// Example of Map object usage:
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(1, 'One');
myMap.set({ id: 1 }, 'Object Key');

console.log(myMap.get('name')); // Output: Alice
console.log(myMap.size);      // Output: 3


// Example of Array.prototype.map() usage:
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => number * 2);

console.log(numbers);        // Output: [1, 2, 3] (original array unchanged)
console.log(doubledNumbers); // Output: [2, 4, 6] (new array with transformed values)