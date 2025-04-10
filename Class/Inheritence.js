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

class Customer extends Person{
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }
}

var person1 = new Person("Shazid", "Mashrafi");
console.log(person1);
console.log(person1.greet());

var customer1 = new Customer("Mashrafi", "Shazid", "017xxxx", "1001");
console.log(customer1);
console.log(customer1.greet());