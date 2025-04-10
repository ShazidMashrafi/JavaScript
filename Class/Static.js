// Static can't be called from object
// It can only be called from class itself

class Person {
    constructor(fname, lname) {
            this.firstName = fname;
            this.lastName = lname;
    }
    
    greet() {
        return "Hello";
    }
    static test() {
        console.log("I am static");
    }
}

var person1 = new Person("Shazid", "Mashrafi");
console.log(person1.greet());
// console.log(person1.test()); // won't work
console.log(Person.test());