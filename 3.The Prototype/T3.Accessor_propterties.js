let user = {
    name: 'John',
    surname: 'Smith',
    isAdmin: false,
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true  // it will override the user property of isAdmin
};

console.log(admin.fullName);
console.log(admin.isAdmin);

admin.fullName = "John Snow";

console.log(admin.fullName);
console.log(admin.isAdmin);