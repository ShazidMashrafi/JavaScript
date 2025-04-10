var x;
let list = document.querySelector('ul');
x = list;

// get child nodes
x = list.childNodes; // returns a array of child nodes
x = list.children; // returns child nodes that are not text
list.children[0].textContent= 'Hello';
x = list.children[1].children[0];
x = list.children[1].children[0].href;

x = list.firstChild;
x = list.firstElementChild; //gives the first element without considering text
x = list.lastChild;
x = list.lastElementChild; //gives the last element without considering text

x = list.childElementCount;

var listItem = document.querySelector('ul li:first-child');
x = listItem.parentElement;
x = listItem.parentElement.parentElement;

x = listItem.nextSibling.nextSibling;
x = listItem.nextElementSibling;

listItem = document.querySelector('ul li:last-child');
x =  listItem.previousSibling;
x =  listItem.previousElementSibling;

console.log(x);