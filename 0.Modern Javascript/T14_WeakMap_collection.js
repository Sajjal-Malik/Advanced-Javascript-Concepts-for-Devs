let weakMap = new WeakMap();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, "Data for object 1");
weakMap.set(obj2, "Data for object 2");

console.log(weakMap.get(obj1)); // "Data for object 1"

obj2 = null; // Remove the strong reference to obj2

// At some point, the garbage collector might reclaim obj2,
// and its entry in weakMap will also be removed.
// You cannot reliably check if obj2's entry is gone immediately.

