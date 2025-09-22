let animal = { 
    eats: true,
    walk: function() {
        console.log(`${this} is walking`);
    }
};
let rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.walk());