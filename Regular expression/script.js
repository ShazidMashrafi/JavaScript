// Regular expression is a pattern matching technique
// Checks if a string is following a particular expression or not

let re,str;
re =/hello/; //Regular expression needs to defined within "//";
re = /Hello/;
re = /hello/i; //Removes case sensitivity

// console.log(re);  //shows regular expression with //
console.log(re.source); // SHows regular expression without //

str = "Again Hello world!";
// str = "Hell world!" // the entire regular expression needs to be inside matching string;
// str = "sfsadfHello fsdfsdfjworld!"; // will work
str = "Again Hello world! Hello";

// Ways to match regular expression

// exec() -> Returns array or null. Array if matched, null otherwise
let result = re.exec(str); //returns the first matched index

// test() -> true, false
result = re.test(str);

// match -> array or null
result = str.match(re);

//search() -> returns index of first match or -1
result = str.search(re);

// replace() -> returns new string, and replaces the first found
let newString = str.replace(re,"Hi");

console.log(result);
console.log(newString);