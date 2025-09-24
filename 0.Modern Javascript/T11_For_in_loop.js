// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object
// Example with an object:
const person = {
  fname: "John",
  lname: "Doe",
  age: 25
};

let text = "";
for (let key in person) {
  text += `${key}: ${person[key]}\n`;
}
console.log(text);
// Output:
// fname: John
// lname: Doe
// age: 25



// Example with an array (with caution):
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let index in numbers) {
  txt += `Index ${index}: ${numbers[index]}\n`;
}
console.log(txt);
// Output:
// Index 0: 45
// Index 1: 4
// Index 2: 9
// Index 3: 16
// Index 4: 25