var x=10;
var y;
y=x.toString(); // converts number to string
console.log(y);
y=x.toString(2); // converts number to base x string
console.log(y);
y=x.toString(8);
console.log(y);
y=x.toString(16);
console.log(y);

var z;
y=x.toString();
z=parseInt(y); //converts string to INT
console.log(z);

y="3.1416"
z=parseFloat(y); //converts string to float
console.log(z);

y=parseInt(x.toString(2));
console.log(y);