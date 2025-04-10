var x=["Bangladesh", "USA", "Canada"];
var y;
y=x.toString(); // adds a comma after every element
console.log(y);

x="Bangladesh is a country";
var arr=x.split(" ");
console.log(arr);
y=arr.toString();
console.log(y);

y=arr.join(""); //uses a specific character or string to join the elements
console.log(y);
y=arr.join("***");
console.log(y);
