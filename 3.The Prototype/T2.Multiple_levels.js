let animal = {
    eats: true,
    walk: function() {
        console.log("Animal is walking!");
    },
};

let rabbit = {
    jumps: true,
    __proto__: animal,
};

let longEar = {
    earLength: 10,
    __proto__: rabbit,
};

// function is ihertited from multiple level - animal to rabbit and rabbit to longEar
longEar.walk();

