// Replacing elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode("Random Heading"));
newHeading.className = 'Sample-class';

let oldHeading = document.querySelector('h3');

// parent element needs to be called to replace an element
let parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);