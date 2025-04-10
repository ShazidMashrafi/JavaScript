class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }

    greet() {
        return "Hello " + this.fullName(); 
    }
}

var person1 = new Person("Shazid", "Mashrafi");

console.log(person1);
console.log(person1.fullName());
console.log(person1.greet());