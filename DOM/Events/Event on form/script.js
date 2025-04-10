document.querySelector('#Name').addEventListener('focus', test);
document.querySelector('#Name').addEventListener('keyup',test2);

function test(e) {
    this.style.background = 'orange';
}

function test2(e) {
    // console.log(this.value);
    document.getElementById("demo").innerText = this.value;
}