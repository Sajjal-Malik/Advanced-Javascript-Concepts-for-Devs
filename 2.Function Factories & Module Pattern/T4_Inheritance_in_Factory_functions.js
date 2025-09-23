const Person = (name) => {

    const sayName = () => console.log(`my name is ${name}.`);

    return { sayName };
};

const Nerd = (name) => {

    const { sayName } = Person(name);  // inheritance of function factory

    const doSomethingNerdy = () => console.log(`${name} is doing nerdy stuff.`);

    return { sayName, doSomethingNerdy };
};

const Javier = Nerd('Javier');

Javier.sayName();  // inherited method/ function
Javier.doSomethingNerdy();  // own method / function