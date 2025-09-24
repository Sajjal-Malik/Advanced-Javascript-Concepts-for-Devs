const mySet = new Set();

mySet.add(1);
mySet.add("hello");
mySet.add({ name: "Alice" });
mySet.add(1); // This will not be added as it's a duplicate

console.log(mySet.size); // Output: 3
console.log(mySet.has("hello")); // Output: true

mySet.delete(1);
console.log(mySet.size); // Output: 2

for (const item of mySet) {
  console.log(item);
}
// Output:
// hello
// { name: 'Alice' }