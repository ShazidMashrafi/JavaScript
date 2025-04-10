let map = new Map(
    [
        ['first', 10],
        ['second', 'Mymensingh'],
    ]
);

// Add
map.set('third', 'Shazid mashrafi');


console.log(map);
console.log(map.get('third key'));
console.log(map.has('first key'));
console.log(map.size);

//Iterate
for(let x of map) {
    console.log(x);
}

for(let [x,y] of map) {
    console.log(x, "and" ,y);
}

for(x of map.keys()) {
    console.log(x);
}

for(x of map.values()) {
    console.log(x);
}

for(x of map.entries()) {
    console.log(x);
}

map.forEach((x,y) =>{  // map.forEach(value, key)
    console.log(`key: ${y}, value: ${x}`);
});

let arr = Array.from(map);
console.log(arr);

arr = Array.from(map.keys());
console.log(arr);