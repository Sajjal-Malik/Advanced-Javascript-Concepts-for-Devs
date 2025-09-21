// normal function 
// function payer(name, level) {
// }

// arrow function or factory function
const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        return 'uh oh';
    }

    const damage = (x) => {
        health -= x;
        if (health <= 0) {
            die();
        }
    }
    
    const attack = (enemy) => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if(level > enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    }
    
    return { attack, damage, getLevel, getName };
}


let John = Player('John', 40);
let Walker = Player('Walker', 30);

John.attack(Walker);

