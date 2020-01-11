function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}


function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(url, function(data) {
        data = data.drinks;

        data.forEach(function(item) {
            var dataRow = [];

            dataRow.push(`<td>${item.strDrink}</td>`);
            dataRow.push(`<td><img src=${item.strDrinkThumb}></td>`);
            dataRow.push(`<td><p class="hidden">${item.idDrink}</p></td>`);
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableRows}</table>`.replace(/,/g, "");;
        console.log(`<table>${tableRows}</table>`)

    });
}


function searchSubmit() {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  var inputVal = document.getElementById("toSearch").value;
  console.log("input", inputVal);
  writeToDocument(url + inputVal)
}

