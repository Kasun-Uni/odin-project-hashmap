import HashMap from "./HashMap.js";

const test = new HashMap();

// 1. Populate with 12 entries
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("--- After 12 entries ---");
console.log("length:", test.length());     // 12
console.log("capacity:", test.capacity);    // 16 (0.75 * 16 = 12, so we're right at the edge)

// 2. Overwrite a few existing keys
test.set("apple", "green"); // overwritten, not a new entry
test.set("dog", "black");   // overwritten, not a new entry

console.log("--- After overwriting 2 keys ---");
console.log("length:", test.length());     // still 12
console.log("capacity:", test.capacity);   // still 16
console.log("apple ->", test.get("apple")); // "green"
console.log("dog ->", test.get("dog"));     // "black"

// 3. Add a 13th entry -> should trigger growth
test.set("moon", "silver");

console.log("--- After adding 13th entry (moon) ---");
console.log("length:", test.length());     // 13
console.log("capacity:", test.capacity);   // 32 (doubled)
console.log("load level:", test.length() / test.capacity); // well below 0.75

// 4. Overwrite again after growth
test.set("moon", "gray");
console.log("moon ->", test.get("moon")); // "gray"
console.log("length after overwrite:", test.length()); // still 13

// 5. Test all other methods still work after growth
console.log("--- Final checks ---");
console.log("has('kite'):", test.has("kite"));       // true
console.log("has('mango'):", test.has("mango"));     // false
console.log("remove('kite'):", test.remove("kite")); // true
console.log("has('kite') after remove:", test.has("kite")); // false
console.log("length after remove:", test.length());  // 12

console.log("keys:", test.keys());
console.log("values:", test.values());
console.log("entries:", test.entries());

test.clear();
console.log("length after clear:", test.length()); // 0