var person = {
    // Properties
    firstName: "Shazid",
    lastName: "Mashrafi",
    city: "Mymensingh",

    // Method
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.firstName); // is a property
console.log(person.fullName()); // Is a method
console.log(person.fullName); // Returns the declaration