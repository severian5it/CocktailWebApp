const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type);
    xhr.send();
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.drinks;
        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.strDrink + "</p>";
        });
        console.log('here', data)

    });
}
