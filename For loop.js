// For-in -> string, array, object
// For-of -> string, array
var str = "I am shazid mashrafi";
var food = ["Cake", "Chocolate", "Ice Cream"]
var person = {
    name: "Shazid Mashrafi",
    profession: "Student",
    age: 20
}

// "in" gets the index, gets the 
for(var x in str)
{
    console.log("Index : ", x);
}

// "of" gets the value
for(var x of str)
{
    console.log("Value : ", x);
}

for(var x in food)
{
    console.log(x);
}
for(var x of food)
{
    console.log(x);
}



for(var x in person)
{
    console.log("Property: " + x + ", Value: " + person[x]); //person.x may cause issues
}

// Object is not iterable
// for(var x of person)
// {
//     console.log(x);
// }