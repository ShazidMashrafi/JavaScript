var x;
// document.getElementByClassName(); gets element by class name
var list = document.getElementsByClassName('sample-class'); //returns a array
x = list[0];
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].padding = '10px';
list[0].textContent = "Title";

// document.getElementsByTagName(); gets by tag name
list = document.getElementsByTagName('li'); //gets all the elements that have the same tag under document
list = document.querySelector('ol').getElementsByTagName('li'); //gets all the tags under the some tag
// For each wont work, need to convert it to proper array first
// let lis = Array.from(list);
// // list.forEach(function(item) {
// //     console.log(item);
// // });

// document.querySelectorAll()
// id -> "#id-name"
// class -> ".class-name"
// tag -> "tag-name"

list = document.querySelectorAll('li');
list = document.querySelectorAll("ul li");
// it is a pure array. So for Each works
// list.forEach(function(item) {
//     console.log(item);
// });
list = document.querySelectorAll('li:nth-child(odd)'); //selects odd elements of li tag
list.forEach(function(item) {
    item.style.background = 'grey';
    item.style.color = 'white';
});
console.log(list);
