document.querySelector('#Sample-button').addEventListener("mousemove",message);

function message(e) {
    let val = e;
    val = e.target;  //calls the set event listener
    val = e.target.id; // calls th id
    val = e.timeStamp; // tine passed between page load and event
    val = e.type; // gives the event type
    val = e.clientY; //gives the pixel clicked on
    val = e.clientX;
    val = e.offsetY; //gives the relative pixel count
    val = this;
    this.style.background = `#${e.offsetX}`;
    console.log(e.offsetX);
    console.log(e.offsetY);
}