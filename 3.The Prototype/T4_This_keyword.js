let animal = {
    walk() {
        if (!this.isSleeping) {
            alert('Walking');
        }
    },
    sleep() {
        this.isSleeping = true;
    },
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal,
};

rabbit.sleep();
console.log(rabbit);
console.log(animal);
rabbit.walk();