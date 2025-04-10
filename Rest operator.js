let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits;
console.log(first, second, third);

let person = {
    fname:'Shazid',
    lname:'Mashrafi',
    city:'Mymensingh'
}

let {fname, ...others} = person;
console.log(fname, others);

let test = (name, num1, ...numbers) => {
    console.log(name);
    console.log(num1);
    console.log(numbers);
}

test('Shazid', 67, 1, 5, 10);

let nums = [67, 1, 5, 10];
let test2 = (name, ...numbers) => {  // Rest operator
    console.log(name);
    console.log(num1);
    console.log(numbers);
}
test2('Mashrafi', ...nums);  //Spread operator