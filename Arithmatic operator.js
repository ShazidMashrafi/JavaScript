var a = "7", b="3", s="shazid";
console.log(a-b); //will do arithmetic subtraction
console.log(a+b); //will do string addition
//only + does string concatenation, others do arithmetic operation

// Number with string
console.log(a+s); // number will be considered as string
console.log(s+b);

// String subtracted from number
console.log(a-s); // Outputs NaN = Not a Number 

// Works from left to right
console.log(s+a+b) // (string + number) + number = string + number
console.log(a+b+s) // (number + number) + string = number + string

