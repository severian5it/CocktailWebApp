function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
