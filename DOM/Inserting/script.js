// Create element
let olitem=document.createElement('li');

// Add id and class
olitem.className  = "a new another-class";
olitem.id = "new-element";

// Add attribute
olitem.setAttribute('title','a title to new element'); //setAttribute(attribute,value)

olitem.appendChild(document.createTextNode('Javascript'));
document.querySelector('ol').appendChild(olitem);
// console.log(olitem);

let ulItem = document.createElement('li');
let link = document.createElement('a');
link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href','https://www.instagram.com');
ulItem.appendChild(link);

console.log(ulItem);
// console.log(link);