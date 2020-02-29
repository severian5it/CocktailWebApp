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

            dataRow.push('<div class="card">')
            dataRow.push('<div class="image">')
            dataRow.push(`<img src=${item.strDrinkThumb} onclick="openGalleryModal(${item.idDrink})">`)
            dataRow.push('</div>')
            dataRow.push('<div class="card-body">')
            dataRow.push(`<h4 class="card-title">${item.strDrink}</h4>`)
            dataRow.push('</div>')
            dataRow.push('</div>')
            tableRows.push(`${dataRow}`);
        });

        el.innerHTML = `${tableRows}`.replace(/,/g, "");

    });
}

function searchSubmit() {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  var inputVal = document.getElementById("toSearch").value;
  writeToDocument(url + inputVal)
  document.getElementById("wrapper").classList.add('wrapafter');
  document.getElementById("wrapper").classList.remove('wrap');
}


function writeToModal(url) {
    var tableRows = [];
    var el = document.getElementById("modal-cocktail");

    getData(url, function(data) {
        data = data.drinks;

        data.forEach(function(item) {
            var dataRow = [];
            dataRow.push(`<h4>${item.strDrink}</h4>`)
            dataRow.push(`<p>${item.strInstructions}</p>`)
            tableRows.push(`${dataRow}`);
        });

        //el.innerHTML = `<table>${tableRows}</table>`.replace(/,/g, "");;
        el.innerHTML = `${tableRows}`.replace(/,/g, "");

    });
}


 function openGalleryModal(id) {
    /**
     * Open Gallery Modal
    */
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    console.log(url+id)
    writeToModal(url+id)
    $('#modalDetails').modal('show');

}

//  needed?
function closeGalleryModal() {
    /**
     * close Gallery  Modal
    */
    $('#modal').modal('hide');

}

function letterPagination(letter) {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
  writeToDocument(url + letter)
}
