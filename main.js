import HashMap from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

console.log(test.keys());    // ["apple", "banana", "carrot"] (order may vary)
console.log(test.values());  // ["red", "yellow", "orange"] (order may vary)
console.log(test.entries()); // [["apple","red"], ["banana","yellow"], ["carrot","orange"]]

test.clear();
console.log(test.length());  // 0
console.log(test.keys());    // []