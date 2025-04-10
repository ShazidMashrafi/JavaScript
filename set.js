let set = new Set([1, 2, 2, 5]);
set.add("Hello");
set.add(1);
set.delete(5);

console.log(set);
console.log(set.has(2));
console.log(set.size);

for(x of set) {
    console.log(x);
}

let iter = set.entries();
console.log(iter);

for(let [x] of set.entries()) {
    console.log(x);
}


set.forEach(value => console.log(value));