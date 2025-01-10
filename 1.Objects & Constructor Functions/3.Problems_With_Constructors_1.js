function User(name){
    this.name = name;
}

User.prototype.x = "X";

const user = new User("Malik");
console.log(user);
console.log(user.x);
console.log(name);