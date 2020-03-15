/**
 * Asynchronous function returning a promise
 * @param {string}   url          url to Call.
 */
async function callApi(url) {
    let response = await fetch(url);
    return await response.json();
}

/**
 * Call Api with the url and output the result to a card
 * @param {string}   url          url to Call.
 */
function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("data");
    callApi(url).then(function (response) {
        data = response.drinks;
        data.forEach(function (item) {
            let dataRow = [];
            dataRow.push('<div class="col-sm-12 col-md-6 col-lg-3 d-flex flex-row justify-content-center">')
            dataRow.push('<div class="card shadow-lg p-2 mb-3 bg-white rounded mt-3">')
            dataRow.push('<div class="image">')
            dataRow.push(`<img src=${item.strDrinkThumb} class="img-fluid" onclick="openGalleryModal(${item.idDrink})">`)
            dataRow.push('</div>')
            dataRow.push('<div class="card-body">')
            dataRow.push(`<h5 class="card-title">${item.strDrink}</h5>`)
            dataRow.push('</div>')
            dataRow.push('</div>')
            dataRow.push('</div>')
            tableRows.push(`${dataRow}`);
        });

        el.innerHTML = `${tableRows}`.replace(/,/g, "");
    }).catch(function (err) {
        $('#modalMissing').modal('show');
    });
}

/**
 * Call Api with the value of Input field
 */
function searchSubmit() {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    let inputVal = document.getElementById("toSearch").value;
    writeToDocument(url + inputVal)
    document.getElementById("wrapper").classList.remove('wrap');
}

/**
 * Call Api, return a random cocktail and show the modal
 */
function randomCocktail() {
    let urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    writeToModal(urlRandom);
    $('#modalDetails').modal('show');
}

/**
 * Call Api with url and write the results into  modal cocktail
 * @param {string}   url          url to Call.
 */
function writeToModal(url) {
    let tableRowsBody = [];
    let el = document.getElementById("modal-cocktail");

    callApi(url).then(function (response) {
        data = response.drinks;

        data.forEach(function (item) {
            let dataRow = [];
            dataRow.push(`<p><bold>Glass: </bold>${item.strGlass}</p>`)
            dataRow.push(`<p><bold>Category: </bold>${item.strCategory}</p>`)
            dataRow.push(`<p><bold>Instructions: </bold>${item.strInstructions}</p>`)
            dataRow.push(`<p><bold>Ingredients: </bold> <ul style="list-style-type:disc;"></p>`)

            const ingredientToLoop = [{
                "ingredient": item.strIngredient1,
                "measure": item.strMeasure1
            }, {
                "ingredient": item.strIngredient2,
                "measure": item.strMeasure2
            }, {
                "ingredient": item.strIngredient3,
                "measure": item.strMeasure3
            }, {
                "ingredient": item.strIngredient4,
                "measure": item.strMeasure4
            }, {
                "ingredient": item.strIngredient5,
                "measure": item.strMeasure5
            }, {
                "ingredient": item.strIngredient6,
                "measure": item.strMeasure6
            }, {
                "ingredient": item.strIngredient7,
                "measure": item.strMeasure7
            }, {
                "ingredient": item.strIngredient8,
                "measure": item.strMeasure8
            }, {
                "ingredient": item.strIngredient9,
                "measure": item.strMeasure9
            }];

            ingredientToLoop.forEach(pushIngredient);

            function pushIngredient(item) {
                if (item.ingredient !== null) {
                    if (item.measure !== null) {
                        dataRow.push(`<li>${item.measure} of ${item.ingredient}</li>`)
                    } else {
                        dataRow.push(`<li>${item.ingredient}</li>`)
                    }
                }
            }

            dataRow.push(`</ul>`)
            tableRowsBody.push(`${dataRow}`);
        });

        el.innerHTML = `${tableRowsBody}`.replace(/,/g, "");

    });

    let tableRowsHeader = [];
    let title = document.getElementById("modal-cocktail-header");

    callApi(url).then(function (response) {
        data = response.drinks;
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

/**
 * Open Gallery Modal
 * @param {number}   id           Cocktail Id.
 */
function openGalleryModal(id) {

    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    writeToModal(url + id)
    $('#modalDetails').modal('show');

}

/**
 * Call Api with letter
 * @param {string}   letter          Letter to Call.
 */
function letterPagination(letter) {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
    writeToDocument(url + letter)
}
