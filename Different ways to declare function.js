// Normal function
function something(name) {
    console.log(`This is ${name}`);
}

// Function expression
var something2 = function (name) {
    console.log(`This is ${name}`);
}

// Arrow function. Used from ES6
var something3 = (name) => {
    console.log(`This is ${name}`);
}

something("Normal function");
something2("Function expression");
something3("Arrow function");
