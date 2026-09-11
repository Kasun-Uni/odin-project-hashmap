import HashMap from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

console.log(test.buckets);
console.log(test.length()); // 3