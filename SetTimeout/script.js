let persons = [
    {firstName:"Shazid", lastName:"Mashrafi"}
]

function createPerson(person) {
    setTimeout(function() {
        persons.push(person);
    }, 3000);
}

function getPerson() {
    setTimeout(function() {
        let output ="";
        persons.forEach(function(person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`;
        });
        document.getElementById("output").innerHTML = output;
    },1000);
}

createPerson({firstName: "Mashrafi", lastName: "Shazid"});
getPerson();