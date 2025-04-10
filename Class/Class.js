class Person {
    constructor(fname, lname, dob) {
        this.firstName = fname;
        this.lastName = lname;
        this.dob = dob;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    calculateAge()  {
        var birthday = new Date(this.dob)
        var diff = Date.now() - birthday.getTime();
        var age = new Date(diff);
        return Math.abs(age.getUTCFullYear()-1970);
    }
}

var person1 = new Person("Shazid", "Mashrafi", "11-16-2003");
var person2 = new Person("Mashrafi", "Shazid", "11-16-2001");

console.log(person1);
console.log(person1.calculateAge());
console.log(person1.fullName());
console.log(person2.calculateAge());