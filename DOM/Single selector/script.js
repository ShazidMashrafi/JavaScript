var val;

// document.getElementById(); can call element by Id only

//getting an element
val = document.getElementById('document-title')
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;
// if same id exists then the first element is fetched

//changing style
document.getElementById('document-title').style.background="#333";
document.getElementById('document-title').style.color = "#fff";
document.getElementById('document-title').style.padding = '10px';
document.getElementById('document-title').style.display = 'none'; // hides the element
document.getElementById('document-title').style.display = 'block'; // shows the element

//changing content
document.getElementById('document-title').textContent = "New title";
document.getElementById('document-title').innerText = "Again New Title";
document.getElementById('document-title').innerText = "<i>Again New Title<i>";
document.getElementById('document-title').innerHTML = "<i>Again New Title<i>";

val = document.getElementById('document-title');
val.innerText = "Superior title";

// document.querySelector(); gets element using id, class, tag
// id -> "#id-name"
// class -> ".class-name"
// tag -> "tag-name"
val = document.querySelector("#document-title");
val = document.querySelector(".sample-class");
val = document.querySelector("h3");

val = document.querySelector('ol');
val = document.querySelector('ol li'); // accesses first li of ol
val.style.background = "red";
val.style.color = "white"
val = document.querySelector('li:last-child'); //accesses the last element of the same level
val = document.querySelector('li:nth-child(1)'); //accesses nth child
document.querySelector('li:nth-child(2)').innerText = "Hello"; //changing value



console.log(val);