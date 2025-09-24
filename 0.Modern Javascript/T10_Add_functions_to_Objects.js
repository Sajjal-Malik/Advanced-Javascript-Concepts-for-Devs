//  Adding a method during object creation (Object Literal):
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: John Doe



// Adding a method to an existing object:
const car = {
  make: "Toyota",
  model: "Camry"
};

// Using dot notation
car.start = function() {
  console.log("Engine started!");
};

// Using bracket notation (useful for dynamic property names)
car["stop"] = function() {
  console.log("Engine stopped!");
};

car.start(); // Output: Engine started!
car.stop();  // Output: Engine stopped!



function Animal(name) {
  this.name = name;
}



// Adding methods using constructor functions and prototypes:
// Add the sayHello method to the Animal prototype
Animal.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const dog = new Animal("Buddy");
const cat = new Animal("Whiskers");

dog.sayHello(); // Output: Hello, my name is Buddy
cat.sayHello(); // Output: Hello, my name is Whiskers