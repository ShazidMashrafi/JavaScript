// Spread operator '...' spreads the contents to an array

let str = "Mymensingh";
let newStr = [...str];
console.log(newStr);

let fruit1 = ['Apple', 'Pine-apple'];
let fruit2 = ['Orange', 'Grape'];
let fruit3 = "Jackfruit";

let fruits = [fruit1, fruit2, fruit3];
console.log(fruits);
fruits = [...fruit1, ...fruit2, fruit3];
console.log(fruits);

let person = {
    fname: 'Shazid',
    lname: 'Mashrafi'
}

let newPerson = {...person, city:'Mymensingh'};
console.log(newPerson);

let numbers = [23, 1, 0, -1];
console.log(Math.max(...numbers));

let person2 = ['Shazid', 'Mashrafi'];
let hello = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

hello(...person2);