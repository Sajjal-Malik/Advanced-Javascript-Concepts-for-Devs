function User(name){
    this.name = name;
    this.city = "New York";

    if(this.name === "admin")
        return { name: "admin" };
}

const user = new User("Malik");

console.log(user);
console.log(user instanceof User);

