// Remove element
let listItems = document.querySelectorAll('li');
let list = document.querySelector('ul');

listItems[0].remove();
listItems[5].remove();
list.removeChild(listItems[6]);

//Removing className
list.classList.add("test");
list.classList.add("new-test");
list.classList.remove('sample-class')

let val = list.hasAttribute('title');

list.setAttribute("title", "New-title");
list.removeAttribute("title");

console.log(list);
console.log(listItems);