let map = new Map();
console.log(map);

map.set("name", "John");
console.log(map);

let keys = map.keys();
console.log(keys);

let array = Array.from(keys);
console.log(array);

array.push("more");
console.log(array);
