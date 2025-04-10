var student1 = {
    name : "Shazid",
    age : 20,
    hometown: "Mymensingh"
}


// If JSON is written in JS file then it will be considered as JS object
var student2_json = {  
    "name": "Mashrafi",
    "age": 25,
    "hometown": "Gafargaon"
};

var student1_json = JSON.stringify(student1); // JS to JSON
console.log(student1_json);

var student2 = JSON.parse(JSON.stringify(student2_json)); //JSON to JS
console.log(student2);