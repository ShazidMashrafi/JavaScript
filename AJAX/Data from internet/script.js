document.getElementById("get_joke").addEventListener("click", loadJoke);

function loadJoke(e) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    xhr.onprogress = function() {
        document.getElementById('output').innerHTML = "<h3>Loading....</h3>";
    }
    xhr.onload = function() {
        if(this.status == 200) {
            let data = JSON.parse(this.responseText);
            let joke = data.value;
            document.getElementById("output").innerHTML = `<h4>${joke}</h4>`;
        }
    }
    
    xhr.send();
}