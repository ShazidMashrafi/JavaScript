let persons = [
    {firstName:"Shazid", lastName:"Mashrafi"}
]

function createPerson(person) {
    let prom = new Promise (function(resolve, reject) {
        persons.push(person);
        let error = false;
        if(!error) {
            resolve(); // if resolve is ok then '.then' gets executed
        }
        else {
            reject("Error!: Something wrong");  // if reject is ok then '.catch' gets executed
        }
    });
    return prom;
}

function getPerson() {
    let output ="";
    persons.forEach(function(person) {
        output += `<li>${person.firstName} ${person.lastName}</li>`;
    });
    document.getElementById("output").innerHTML = output;
}

createPerson({firstName: "Mashrafi", lastName: "Shazid"}).then(getPerson).catch(function(err) {
    console.log(err);
});