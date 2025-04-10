document.getElementById("get_data").addEventListener('click',loadData);

function loadData() {
    // Create XHR (XML HTTP Request) Object
    let xhr = new XMLHttpRequest();
    // Open -> accesses the file
    // Open(method, file_name, true)
    xhr.open("GET", "data.txt", true);

    // onprogress -> do something while data loads
    xhr.onprogress = function () {
        console.log(this.readyState); //while processing request
    }

    // onload -> when the file loads, executes a command
    xhr.onload = function() {
        // HTTP statuses
        // 200 -> ok
        // 403 -> forbidden
        // 404 -> Not found
        if(this.status == 200) { 
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
        }
    }

    // Another method to do the same task
    xhr.onreadystatechange = function () {
        //readystate values
        // 0 :   request not initialized
        // 1 : server connection established
        // 2 : request received
        // 3 : processing request
        // 4 : request finished and response is ready
        if(this.status == 200 && this.readyState == 4) {
            console.log(this.responseText);
        }
    }

    xhr.send(); //must be called
}