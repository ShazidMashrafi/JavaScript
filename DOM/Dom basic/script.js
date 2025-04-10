let val;
val = this; // indicates the whole document
val = window; // gives the whole window
val = window.document; // access the document object
val = document; // accesses the document object
val = document.all; // Lists all the elements in array
val = document.all[0]; // accesses the array elements
val = document.all.length; // gives the array length

val = document.head; // given head property
val = document.body; // gives body property
val = document.doctype; // gives the document type
val = document.domain; //gives the domain address
val = document.URL; //gives url link
val = document.characterSet; // gives correcter set
val = document.contentType; // gives content type

val = document.forms; // gives all forms present in document
val = document.forms[0] //gives the first form
val = document.forms[0].method; //fives form method
val = document.forms[0].action // gives action of the form

val = document.links; // gives all links in document
val = document.links[0] // accesses the first link
val = document.links[0].href; // gives the first link pointer
val = document.links[0].className; // gives className of the link
val = document.links[0].classList; // gives the classNames in a array

val = document.images; // outputs the images 
val = document.scripts; // outputs the scripts in array
val = document.scripts[0]; // accesses the first script
val = document.scripts[0].src; //gives source of the script
val = document.scripts[0].getAttribute('src') // gives value of any attribute

links = document.links; //gives link array output;
// ForEach loop can't run of that
// links.forEach(function(link) {
//     console.log(link);
// })

var linkArr = Array.from(links); // converting to array
linkArr.forEach(function(link) {
    console.log(link);  // using loop to a access the links
});

linkArr.forEach(function(link) {
    console.log(link.getAttribute('src'));  // using loop to a access the links src
});

console.log(val);