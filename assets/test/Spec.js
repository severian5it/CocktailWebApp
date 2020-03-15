describe("function writeToDocument(url)", function () {
    beforeEach(function () {
        setFixtures(`<div class="row" id="data"></div> <div aria-hidden="true" class="modal fade" id="modalMissing" role="dialog" tabindex="-1"></div>`);
        let url;
        let inputVar;

    });

    it("should exist", function () {
        expect(writeToDocument).toBeDefined();
    });

    it("should populate data when invoked with a letter", async () => {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
        inputVar = 'a';
        let promise = new Promise(function (resolve, reject) {
            writeToDocument(url + inputVar);
            setTimeout(() => resolve(true), 1000);
        });
        await promise;
        expect(document.getElementById("data").innerHTML.length).toBeGreaterThan(0);
    });

    it("should populate data when invoked with an existing ingredient", async () => {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
        inputVar = 'vodka';
        let promise = new Promise(function (resolve, reject) {
            writeToDocument(url + inputVar);
            setTimeout(() => resolve(true), 1000);
        });
        await promise;
        expect(document.getElementById("data").innerHTML.length).toBeGreaterThan(0);
    });

    it("should show missing modal when invoked with a missing ingredient", async () => {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
        inputVar = 'oil';
        let promise = new Promise(function (resolve, reject) {
            writeToDocument(url + inputVar);
            setTimeout(() => resolve(true), 1000);
        });
        await promise;
        expect($('#modalMissing').hasClass("show")).toBeTruthy();
    });

});


describe("function writeToModal(url)", function () {
    beforeEach(function () {
        setFixtures(`<div class="modal-header" id="modal-cocktail-header"></div><div class="modal-body" id="modal-cocktail">...</div>`);
        let url;
        let inpuVar;

    });

    it("should exist", function () {
        expect(writeToModal).toBeDefined();
    });

    it("should write on Cocktail Modal data when invoked with an id", async () => {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
        inputVar = 11007;
        let promise = new Promise(function (resolve, reject) {
            writeToModal(url + inputVar);
            setTimeout(() => resolve(true), 1000);
        });
        await promise;
        expect($('#modal-cocktail-header').html().length).toBeGreaterThan(0);
        expect($('#modal-cocktail').html().length).toBeGreaterThan(0);

    });

});

describe("function randomCocktail(url)", function () {
    beforeEach(function () {
        setFixtures(`<div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="modalDetails" role="dialog" tabindex="-1">`);
        let url;
    });

    it("should exist", function () {
        expect(randomCocktail).toBeDefined();
    });

    it("should show detail modal when invoked", async () => {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        let promise = new Promise(function (resolve, reject) {
            randomCocktail(url);
            setTimeout(() => resolve(true), 1000);
        });
        await promise;
        expect($('#modalDetails').hasClass("show")).toBeTruthy();
    });

});

describe("function searchSubmit()", function () {
    beforeEach(function () {
        setFixtures(`<div class="wrap" id="wrapper">
                <div class="row ">
                    <div class="col-sm-12 offset-md-3 col-md-6">
                        <div class="search main" id="searchBox">
                            <input class="searchTerm form-control form-control-lg" id="toSearch"
                                   placeholder="What ingredient do you have?" type="text">
                            <button class="searchButton peach-gradient" onclick="searchSubmit()"
                                    type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`);
    });

    it("should exist", function () {
        expect(searchSubmit).toBeDefined();
    });

    it("should remove wrapper from search box", async () => {
        let promise = new Promise(function (resolve, reject) {
            searchSubmit();
            setTimeout(() => resolve(true), 1000);
        });
        await promise;
        console.log($('#wrapper'))
        expect($('#wrapper').hasClass("wrap")).toBeFalsy();
    });

});
