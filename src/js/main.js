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

            //dataRow.push(`<td>${item.strDrink}</td>`);
            //dataRow.push(`<td><img src=${item.strDrinkThumb}></td>`);
            //dataRow.push(`<td><p class="hidden">${item.idDrink}</p></td>`);
            //tableRows.push(`<tr>${dataRow}</tr>`);
            /*
            but regardless, table seems fine if the data is tabular (like a spreadsheet). otherwise use divs, make them float (or display inline), compute their width as a 1/4 of that of
            the page/container width and they should all self arrange in rows having 4 cols each.
             */
            dataRow.push('<div style="float: left">')
            dataRow.push('<div class="card">')
            dataRow.push('<div class="image">')
            dataRow.push(`<img src=${item.strDrinkThumb} height=200 width=300 onclick="openGalleryModal(${item.idDrink})">`)
            dataRow.push('</div>')
            dataRow.push('<div class="card-body">')
            dataRow.push(`<h4 class="card-title">${item.strDrink}</h4>`)
            dataRow.push('</div>')
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
}


function writeToModal(url) {
    var tableRows = [];
    var el = document.getElementById("modal-cocktail");

    getData(url, function(data) {
        data = data.drinks;

        data.forEach(function(item) {
            var dataRow = [];

            //dataRow.push(`<td>${item.strDrink}</td>`);
            //dataRow.push(`<td><img src=${item.strDrinkThumb}></td>`);
            //dataRow.push(`<td><p class="hidden">${item.idDrink}</p></td>`);
            //tableRows.push(`<tr>${dataRow}</tr>`);
            /*
            but regardless, table seems fine if the data is tabular (like a spreadsheet). otherwise use divs, make them float (or display inline), compute their width as a 1/4 of that of
            the page/container width and they should all self arrange in rows having 4 cols each.
            */
            dataRow.push(`<p class="card-title">${item.strInstructions}</p>`)
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
    $('.modal').modal('show');

}

//  needed?
function closeGalleryModal() {
    /**
     * close Gallery  Modal
    */
    $('#modal').modal('hide');

}

