// Variables with var can be declared more than once
var x = 10;
var x = 5;

// variables with let can't be declared more than once
let y = 10;
//let y = 6; //won't be allowed

var a = 1;
let b = 2;
const c = 3;

console.log('Global scope: ', a, b, c);

// Declaring and Changing values in function scope won't affect the global
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a, b, c);
}

test();
console.log('Global scope: ', a, b, c);

// Declaring and Changing values in if & for scope only var variables will change
if(true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('If scope: ', a, b, c);
}

console.log('Global scope: ', a, b, c);