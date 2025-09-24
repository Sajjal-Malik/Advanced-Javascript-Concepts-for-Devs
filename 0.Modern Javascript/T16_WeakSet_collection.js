const myWeakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)); // Output: true

// If obj1 is no longer referenced elsewhere, it can be garbage collected,
// and it will be automatically removed from myWeakSet.
obj1 = null; 

// You cannot iterate over a WeakSet or check its size
// console.log(myWeakSet.size); // Throws an error
// for (const item of myWeakSet) { } // Throws an error