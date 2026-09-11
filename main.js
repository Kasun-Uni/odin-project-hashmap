import HashMap from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

console.log(test.get("apple"));   // "red"
console.log(test.get("mango"));   // null

console.log(test.has("banana"));  // true
console.log(test.has("mango"));   // false

console.log(test.remove("banana")); // true
console.log(test.has("banana"));    // false
console.log(test.remove("mango"));  // false

console.log(test.length()); // 2