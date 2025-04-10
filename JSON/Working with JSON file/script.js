var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        jsonData(data);
    }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj)
{
    var js_obj = JSON.parse(json_obj);
    var persons = js_obj.persons;
    for(person of persons) {
        for(x in person) {
            console.log(person[x]);
        }
    }
}