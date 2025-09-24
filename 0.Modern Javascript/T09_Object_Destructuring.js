// Basic Destructuring:
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// const { firstName, age } = user;
// console.log(firstName); // "John"
// console.log(age);     // 30


// Renaming Properties:
const { firstName: first, lastName: last } = user;
console.log(first); // "John"
console.log(last);  // "Doe"


// Default Values:
// const { city = "New York", country } = user;
console.log(city);    // "New York" (default value used)
console.log(country); // undefined (property not present)

// Rest Property:
const { firstName, ...otherDetails } = user;
console.log(firstName);      // "John"
console.log(otherDetails); // { lastName: "Doe", age: 30 }


// Destructuring in Function Parameters:
function greet({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}
greet(user); // "Hello, John Doe!"


// Combined Array and Object Destructuring:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const [{ name: firstUserName }, { name: secondUserName }] = users;
console.log(firstUserName);  // "Alice"
console.log(secondUserName); // "Bob"



// Nested Destructuring:
const person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    zip: "90210"
  }
};

const { name, address: { street } } = person;
console.log(name);   // "Alice"
console.log(street); // "123 Main St"
