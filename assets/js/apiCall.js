function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response === "") {
                         $('#modalMissing').modal('show');
            }
            else {
                    cb(JSON.parse(this.responseText));

            }
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("data");

    getData(url, function (data) {
        data = data.drinks;
        data.forEach(function (item) {
            let dataRow = [];
dataRow.push('<div class="col-sm-6 col-md-4 col-lg-2 ">')
            dataRow.push('<div class="card">')
            dataRow.push('<div class="image">')
            dataRow.push(`<img src=${item.strDrinkThumb} onclick="openGalleryModal(${item.idDrink})">`)
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
    document.getElementById("wrapper").classList.add('wrapafter');
    document.getElementById("wrapper").classList.remove('wrap');
}

function randomCocktail() {
    let urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    writeToModal(urlRandom);
    $('#modalDetails').modal('show');
}


function writeToModal(url) {
    let tableRowsBody = [];
    let el = document.getElementById("modal-cocktail");

    getData(url, function (data) {
        data = data.drinks;

        data.forEach(function (item) {
            let dataRow = [];
            dataRow.push(`<p><bold>Glass: </bold>${item.strGlass}</p>`)
            dataRow.push(`<p><bold>Category: </bold>${item.strCategory}</p>`)
            dataRow.push(`<p><bold>Instructions: </bold>${item.strInstructions}</p>`)
            dataRow.push(`<p><bold>Ingredients: </bold> <ul style="list-style-type:disc;"></p>`)
            if (item.strIngredient1 !== null) {
                if (item.strMeasure1 !== null) {
                    dataRow.push(`<li>${item.strMeasure1} of ${item.strIngredient1}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient1}</li>`)
                }
            }
            if (item.strIngredient2 !== null) {
                if (item.strMeasure2 !== null) {
                    dataRow.push(`<li>${item.strMeasure2} of ${item.strIngredient2}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient2}</li>`)
                }
            }
            if (item.strIngredient3 !== null) {
                if (item.strMeasure3 !== null) {
                    dataRow.push(`<li>${item.strMeasure3} of ${item.strIngredient3}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient3}</li>`)
                }
            }
            if (item.strIngredient4 !== null) {
                if (item.strMeasure4 !== null) {
                    dataRow.push(`<li>${item.strMeasure4} of ${item.strIngredient4}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient4}</li>`)
                }
            }
            if (item.strIngredient5 !== null) {
                if (item.strMeasure5 !== null) {
                    dataRow.push(`<li>${item.strMeasure5} of ${item.strIngredient5}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient5}</li>`)
                }
            }
            if (item.strIngredient6 !== null) {
                if (item.strMeasure6 !== null) {
                    dataRow.push(`<li>${item.strMeasure6} of ${item.strIngredient6}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient6}</li>`)
                }
            }
            if (item.strIngredient7 !== null) {
                if (item.strMeasure7 !== null) {
                    dataRow.push(`<li>${item.strMeasure7} of ${item.strIngredient7}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient7}</li>`)
                }
            }
            if (item.strIngredient8 !== null) {
                if (item.strMeasure8 !== null) {
                    dataRow.push(`<li>${item.strMeasure8} of ${item.strIngredient8}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient8}</li>`)
                }
            }
            if (item.strIngredient9 !== null) {
                if (item.strMeasure9 !== null) {
                    dataRow.push(`<li>${item.strMeasure9} of ${item.strIngredient9}</li>`)
                } else {
                    dataRow.push(`<li>${item.strIngredient9}</li>`)
                }
            }
            dataRow.push(`</ul>`)
            tableRowsBody.push(`${dataRow}`);
        });

        el.innerHTML = `${tableRowsBody}`.replace(/,/g, "");

    });

    let tableRowsHeader = [];
    let title = document.getElementById("modal-cocktail-header");

    getData(url, function (data) {
        data = data.drinks;
        data.forEach(function (item) {
            var dataRow = [];
            dataRow.push(`<h3 class="modal-title">${item.strDrink}</h3>`)
            dataRow.push(`<button aria-label="Close" class="close" data-dismiss="modal" type="button">`)
            dataRow.push(`<span aria-hidden="true">&times;</span>`)
            dataRow.push(`</button>`)
            tableRowsHeader.push(`${dataRow}`);
        });

        title.innerHTML = `${tableRowsHeader}`.replace(/,/g, "");

    });

}


function openGalleryModal(id) {
    /**
     * Open Gallery Modal
     */
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    console.log(url + id)
    writeToModal(url + id)
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
