// prototype is like an inheritance concept

let animal = { 
    eats: true,
    walk: function() {
        console.log(`${this} is walking`);
    }
};
let rabbit = { jumps: true };

// rabbit is now inheriting from the animal object
rabbit.__proto__ = animal; 

// rabbit will have all the propertied and methods of animal object
console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.walk());