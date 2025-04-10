var x="Bangladesh";
var y=" Bangladesh   "
console.log(y.trim()); // removes empty spaces from front and end
var z;

// slice(start, till_end)
z = x.slice(1,4);  
console.log(z);

//slice(start) -> from start to end of the string
z=x.slice(2);
console.log(z);

// negative indexing
z=x.slice(-4,-1)
console.log(z);

// to end
z = x.slice(-4);
console.log(z);