// Fetch api uses Javascript promises
document.getElementById("get-data").addEventListener("click",getData);

// function getData() {
//     // fetch(link) -> gets the data
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(function(res) {
//             // console.log(res.text()); // gets data in text format
//             // console.log(res.json()); //gets data in json format
//             return res.json();
//         })
//         .then(function(data) {
//             console.log(data);
//         })
//         .catch(function(err) {
//             console.log(err);
//         })
// }

// Using arrow function
function getData() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}