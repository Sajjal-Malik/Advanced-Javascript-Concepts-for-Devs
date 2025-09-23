let animal = {
    eats: true,
};

let rabbit = {
    __proto__: animal,
    jumps: true,
};

console.log(Object.keys(animal));

for (let prop in rabbit) {
    console.log(prop);

    let isOwn = rabbit.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`Our: ${prop}`)  // Our: jumps
    }
    else {
        console.log(`Inherited: ${prop}`);  // Inherited: eats
    }
}
console.log(Object.getOwnPropertyDescriptors(animal.__proto__));