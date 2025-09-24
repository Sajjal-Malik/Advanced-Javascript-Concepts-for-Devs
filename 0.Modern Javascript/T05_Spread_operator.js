// Example for Expanding Arrays:
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4]


// Example for Copying Arrays/Objects.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Creates a shallow copy
console.log(copiedArray); // Output: [1, 2, 3]

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // Creates a shallow copy
console.log(copiedObject); // Output: { a: 1, b: 2 }


// Example for Passing Arguments to Functions.
function greet(name1, name2) {
    console.log(`Hello ${name1} and ${name2}`);
}
const names = ["Alice", "Bob"];
greet(...names); // Output: Hello Alice and Bob