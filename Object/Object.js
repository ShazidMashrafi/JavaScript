var student = {name:"Shazid", age:22, hometown:"Mymensingh"};
console.log(student);

var x;
// Access elements, two ways
x=student.name
console.log(x);
x=student["name"];
console.log(x);


// Adding elements, two ways
student["occupation"]="Student";
console.log(student);
student.address="Gafargaon";
console.log(student);

delete student.address;
console.log(student);


student={}; //clears the object
console.log(student);