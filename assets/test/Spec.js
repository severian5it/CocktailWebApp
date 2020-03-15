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
describe("initial startup values and function calls", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should call function fieldInit(9)", function() {
        spyOn(window, 'fieldInit');
        $(document).ready(function() { fieldInit(9); });
        jasmine.clock().tick(1000);
        expect(window.fieldInit).toHaveBeenCalled();
    });

});
/*
    it("write Document invoked with cocktail id should populate data", function () {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
        inputVar = 552;
        writeToDocument(url + inputVar);
        expect($("#data").find("card").length).toBeGreaterThan(0);
    });

    it("write Document invoked with a letter should populate data", function () {
        console.log(jasmine.clock().time)
        url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
        inputVar = 'a';
        writeToDocument(url + inputVar);
        jasmine.clock().tick(1000)
        console.log('test', document.getElementById("data").innerHTML)
        expect($("#data").length).toBeGreaterThan(1);
    });

    it("write Document invoked with an ingredient should populate data", function () {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
        inputVar = 'vodka';
        writeToDocument(url + inputVar);
        jasmine.clock().tick(1000);
        expect($("#data").length).toBeGreaterThan(1);
    });
*/

/*
describe("initial startup values and function calls", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should call function fieldInit(9)", function() {
        spyOn(window, 'fieldInit');
        $(document).ready(function() { fieldInit(9); });
        jasmine.clock().tick(1000);
        expect(window.fieldInit).toHaveBeenCalled();
    });

    it("should call function make_field8BtnVisActive()", function() {
        spyOn(window, 'make_field8BtnVisActive');
        $(document).ready(function() { make_field8BtnVisActive(); });
        jasmine.clock().tick(1000);
        expect(window.make_field8BtnVisActive).toHaveBeenCalled();
    });

    it("should call function resetCounters()", function() {
        spyOn(window, 'resetCounters');
        $(document).ready(function() { resetCounters(); });
        jasmine.clock().tick(1000);
        expect(window.resetCounters).toHaveBeenCalled();
    });

    it("should call function showRegistrationPopup()", function() {
        spyOn(window, 'showRegistrationPopup');
        $(document).ready(function() { showRegistrationPopup(); });
        jasmine.clock().tick(2000);
        expect(window.showRegistrationPopup).toHaveBeenCalled();
    });
});

describe("function sendMail()", function() {
    beforeEach(function() {
        setFixtures(`    <div aria-hidden="true" aria-labelledby="myModalLabel" class="modal fade" id="modalContactForm"
         role="dialog"
         tabindex="-1">`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(sendMail).toBeDefined();
    });

    it("should clear modalContactForm be toggled", function() {
        jasmine.clock().tick(1000);
        expect($("#modalContactForm").attr('class').toEqual('highlighted'));
    });
    /*
    it("should generate 9 cards when called as generateCards(9)", function() {
        playFieldSize = 9;
        generateCards(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").length).toBe(8);
        expect($(".front").length).toBe(8);
        expect($(".back").length).toBe(8);
        expect($(".dummycardshell").length).toBe(1);
    });

    it("should generate 16 cards when called as generateCards(16)", function() {
        playFieldSize = 16;
        generateCards(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").length).toBe(16);
        expect($(".front").length).toBe(16);
        expect($(".back").length).toBe(16);
    });

    it("should generate 36 cards when called as generateCards(36)", function() {
        playFieldSize = 36;
        generateCards(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").length).toBe(36);
        expect($(".front").length).toBe(36);
        expect($(".back").length).toBe(36);
    });


});


/*

describe("initial startup values and function calls", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should call function fieldInit(9)", function() {
        spyOn(window, 'fieldInit');
        $(document).ready(function() { fieldInit(9); });
        jasmine.clock().tick(1000);
        expect(window.fieldInit).toHaveBeenCalled();
    });

    it("should call function make_field8BtnVisActive()", function() {
        spyOn(window, 'make_field8BtnVisActive');
        $(document).ready(function() { make_field8BtnVisActive(); });
        jasmine.clock().tick(1000);
        expect(window.make_field8BtnVisActive).toHaveBeenCalled();
    });

    it("should call function resetCounters()", function() {
        spyOn(window, 'resetCounters');
        $(document).ready(function() { resetCounters(); });
        jasmine.clock().tick(1000);
        expect(window.resetCounters).toHaveBeenCalled();
    });

    it("should call function showRegistrationPopup()", function() {
        spyOn(window, 'showRegistrationPopup');
        $(document).ready(function() { showRegistrationPopup(); });
        jasmine.clock().tick(2000);
        expect(window.showRegistrationPopup).toHaveBeenCalled();
    });
});

describe("function generateCards(num)", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign"></div>`);
        jasmine.clock().install();
        let playFieldSize;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(generateCards).toBeDefined();
    });

    it("should clear DOM elements of $('.playfield')", function() {
        jasmine.clock().tick(1000);
        expect($(".playfield").children().length).toBe(0);
    });

    it("should generate 9 cards when called as generateCards(9)", function() {
        playFieldSize = 9;
        generateCards(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").length).toBe(8);
        expect($(".front").length).toBe(8);
        expect($(".back").length).toBe(8);
        expect($(".dummycardshell").length).toBe(1);
    });

    it("should generate 16 cards when called as generateCards(16)", function() {
        playFieldSize = 16;
        generateCards(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").length).toBe(16);
        expect($(".front").length).toBe(16);
        expect($(".back").length).toBe(16);
    });

    it("should generate 36 cards when called as generateCards(36)", function() {
        playFieldSize = 36;
        generateCards(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").length).toBe(36);
        expect($(".front").length).toBe(36);
        expect($(".back").length).toBe(36);
    });
});

describe("function setCardshellSize(num)", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign"></div>`);
        $(".playfield").css('width', '400px').css('height', '400px');
        jasmine.clock().install();
        let playFieldSize;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(setCardshellSize).toBeDefined();
    });

    it("should set .cardshell dimensions to width 126.8px and height 126.8px when called as setCardshellSize(9)", function() {
        // given .playfield width and height of 400px
        playFieldSize = 9;
        generateCards(playFieldSize);
        setCardshellSize(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").css("width")).toBe('126.797px');
        expect($(".cardshell").css("height")).toBe('126.797px');
    });

    it("should set CardRowlength to 3 setCardshellSize(9)", function() {
        playFieldSize = 9;
        generateCards(playFieldSize);
        setCardshellSize(playFieldSize);
        jasmine.clock().tick(1000);
        expect(CardRowlength).toBe(3);
    });

    it("should set .cardshell dimensions to width 94.8px and height 94.8px when called as setCardshellSize(16)", function() {
        // given .playfield width and height of 400px
        playFieldSize = 16;
        generateCards(playFieldSize);
        setCardshellSize(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").css("width")).toBe('94.7969px');
        expect($(".cardshell").css("height")).toBe('94.7969px');
    });

    it("should set CardRowlength to 4 setCardshellSize(16)", function() {
        playFieldSize = 16;
        generateCards(playFieldSize);
        setCardshellSize(playFieldSize);
        jasmine.clock().tick(1000);
        expect(CardRowlength).toBe(4);
    });

    it("should set .cardshell dimensions to width 61.6px and height 61.6px when called as setCardshellSize(36)", function() {
        // given .playfield width and height of 400px
        playFieldSize = 36;
        generateCards(playFieldSize);
        setCardshellSize(playFieldSize);
        jasmine.clock().tick(1000);
        expect($(".cardshell").css("width")).toBe('61.5938px');
        expect($(".cardshell").css("height")).toBe('61.5938px');
    });

    it("should set CardRowlength to 6 setCardshellSize(36)", function() {
        playFieldSize = 36;
        generateCards(playFieldSize);
        setCardshellSize(playFieldSize);
        jasmine.clock().tick(1000);
        expect(CardRowlength).toBe(6);
    });
});

describe("function fieldInit(num)", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign"></div>`);
        jasmine.clock().install();
        let playFieldSize;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(fieldInit).toBeDefined();
    });

    describe("if called as fieldInit(9)", function() {
        it("should set $('.playfield').css('opacity') to 0 on begin of fieldInit(9)", function() {
            playFieldSize = 9;
            fieldInit(playFieldSize);
            jasmine.clock().tick(800);
            expect($('.playfield').css('opacity')).toBe('0');
            jasmine.clock().tick(800);
            jasmine.clock().tick(1200);
            expect($('.playfield').css('opacity')).toBe('1');
        });

        it("should call function generateCards(num)", function() {
            playFieldSize = 9;
            spyOn(window, 'generateCards');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.generateCards).toHaveBeenCalled();
        });

        it("should call function setCardshellSize(num)", function() {
            playFieldSize = 9;
            spyOn(window, 'setCardshellSize');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.setCardshellSize).toHaveBeenCalled();
        });

        it("should call function prepAndDeliverCardArray(num)", function() {
            playFieldSize = 9;
            spyOn(window, 'prepAndDeliverCardArray');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.prepAndDeliverCardArray).toHaveBeenCalled();
        });
    });

    describe("if called as fieldInit(16)", function() {
        it("should set $('.playfield').css('opacity') to 0 on begin of fieldInit(16)", function() {
            playFieldSize = 16;
            fieldInit(playFieldSize);
            jasmine.clock().tick(800);
            expect($('.playfield').css('opacity')).toBe('0');
            jasmine.clock().tick(800);
            jasmine.clock().tick(1200);
            expect($('.playfield').css('opacity')).toBe('1');
        });

        it("should call function generateCards(16)", function() {
            playFieldSize = 16;
            spyOn(window, 'generateCards');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.generateCards).toHaveBeenCalled();
        });

        it("should call function setCardshellSize(num)", function() {
            playFieldSize = 16;
            spyOn(window, 'setCardshellSize');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.setCardshellSize).toHaveBeenCalled();
        });

        it("should call function prepAndDeliverCardArray(num)", function() {
            playFieldSize = 16;
            spyOn(window, 'prepAndDeliverCardArray');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.prepAndDeliverCardArray).toHaveBeenCalled();
        });
    });

    describe("if called as fieldInit(36)", function() {
        it("should set $('.playfield').css('opacity') to 0 on begin of fieldInit(36)", function() {
            playFieldSize = 36;
            fieldInit(playFieldSize);
            jasmine.clock().tick(800);
            expect($('.playfield').css('opacity')).toBe('0');
            jasmine.clock().tick(800);
            jasmine.clock().tick(1200);
            expect($('.playfield').css('opacity')).toBe('1');
        });

        it("should call function generateCards(num)", function() {
            playFieldSize = 36;
            spyOn(window, 'generateCards');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.generateCards).toHaveBeenCalled();
        });

        it("should call function setCardshellSize(num)", function() {
            playFieldSize = 36;
            spyOn(window, 'setCardshellSize');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.setCardshellSize).toHaveBeenCalled();
        });

        it("should call function prepAndDeliverCardArray(num)", function() {
            playFieldSize = 36;
            spyOn(window, 'prepAndDeliverCardArray');
            fieldInit(playFieldSize);
            jasmine.clock().tick(1000);
            expect(window.prepAndDeliverCardArray).toHaveBeenCalled();
        });
    });
});

describe("function prepAndDeliverCardArray(num)", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign"></div>`);
        jasmine.clock().install();
        let playFieldSize2;
        let playFieldCardArray;
        let currentCardArrayUnsorted, playFieldCardArrayBeforeAssingment=[];
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(prepAndDeliverCardArray).toBeDefined();
    });

    describe("if called as prepAndDeliverCardArray(9)", function() {
        it("should set currentCardArray = masterCardArray.concat();", function() {
            currentCardArray = masterCardArray.concat();
            jasmine.clock().tick(1000);
            expect(currentCardArray).toEqual(masterCardArray);
        });

        it("should create an array with length of 8 out of existent .back elements", function() {
            playFieldSize2 = 9;
            generateCards(playFieldSize2);
            playFieldCardArray = $(".back").toArray();
            jasmine.clock().tick(1000);
            expect(playFieldCardArray.length).toBe(8);
        });

        it("should splice currentCardArray to 8 cards", function() {
            playFieldSize2 = 8;
            currentCardArray = masterCardArray.concat();
            currentCardArray.splice(playFieldSize2, 28);
            jasmine.clock().tick(1000);
            expect(currentCardArray.length).toBe(8);
        });

        it("should call function to shuffle card array", function() {
            playFieldSize2 = 8;
            currentCardArray = masterCardArray.concat();
            currentCardArray.splice(playFieldSize2, 28);
            currentCardArrayUnsorted = currentCardArray.concat();
            currentCardArray.sort(function(a, b) { return 0.5 - Math.random() });
            jasmine.clock().tick(1000);
            expect(currentCardArray).not.toEqual(currentCardArrayUnsorted);
        });

        it("should assign the shuffeled class array to card array on playfield", function() {
            playFieldSize2 = 8;
            currentCardArray = masterCardArray.concat();
            currentCardArray.splice(playFieldSize2, 28);
            generateCards(playFieldSize2);
            playFieldCardArray = $(".back").toArray();
            playFieldCardArrayBeforeAssingment = playFieldCardArray.concat();
            for (let i = 0; i < playFieldSize2; i++) {
                $(playFieldCardArray[i]).addClass(currentCardArray[i]);
            }
            jasmine.clock().tick(1000);
            expect(playFieldCardArray).not.toBe(playFieldCardArrayBeforeAssingment);
        });
    });

    describe("if called as prepAndDeliverCardArray(16)", function() {
        it("should set currentCardArray = masterCardArray.concat();", function() {
            currentCardArray = masterCardArray.concat();
            jasmine.clock().tick(1000);
            expect(currentCardArray).toEqual(masterCardArray);
        });

        it("should create an array with length of 16 out of existent .back elements", function() {
            playFieldSize2 = 16;
            generateCards(playFieldSize2);
            playFieldCardArray = $(".back").toArray();
            jasmine.clock().tick(1000);
            expect(playFieldCardArray.length).toBe(16);
        });

        it("should splice currentCardArray to 16 cards", function() {
            playFieldSize2 = 16;
            currentCardArray = masterCardArray.concat();
            currentCardArray.splice(playFieldSize2, 20);
            jasmine.clock().tick(1000);
            expect(currentCardArray.length).toBe(16);
        });

        it("should call function to randomize card array", function() {
            playFieldSize2 = 16;
            currentCardArray = masterCardArray.concat();
            currentCardArray.splice(playFieldSize2, 28);
            currentCardArrayUnsorted = currentCardArray.concat();
            currentCardArray.sort(function(a, b) { return 0.5 - Math.random() });
            jasmine.clock().tick(1000);
            expect(currentCardArray).not.toEqual(currentCardArrayUnsorted);
        });

        it("should assign the shuffeled class array to card array on playfield", function() {
            playFieldSize2 = 16;
            currentCardArray = masterCardArray.concat();
            currentCardArray.splice(playFieldSize2, 20);
            generateCards(playFieldSize2);
            playFieldCardArray = $(".back").toArray();
            playFieldCardArrayBeforeAssingment = playFieldCardArray.concat();
            for (let i = 0; i < playFieldSize2; i++) {
                $(playFieldCardArray[i]).addClass(currentCardArray[i]);
            }
            jasmine.clock().tick(1000);
            expect(playFieldCardArray).not.toBe(playFieldCardArrayBeforeAssingment);
        });
    });

    describe("if called as prepAndDeliverCardArray(36)", function() {
        it("should set currentCardArray = masterCardArray.concat();", function() {
            currentCardArray = masterCardArray.concat();
            jasmine.clock().tick(1000);
            expect(currentCardArray).toEqual(masterCardArray);
        });

        it("should create an array with length of 36 out of existent .back elements", function() {
            playFieldSize2 = 36;
            generateCards(playFieldSize2);
            playFieldCardArray = $(".back").toArray();
            jasmine.clock().tick(1000);
            expect(playFieldCardArray.length).toBe(36);
        });

        it("should call function to randomize card array", function() {
            playFieldSize2 = 36;
            currentCardArray = masterCardArray.concat();
            currentCardArrayUnsorted = currentCardArray.concat();
            currentCardArray.sort(function(a, b) { return 0.5 - Math.random() });
            jasmine.clock().tick(1000);
            expect(currentCardArray).not.toEqual(currentCardArrayUnsorted);
        });

        it("should assign the shuffeled class array to card array on playfield", function() {
            playFieldSize2 = 36;
            currentCardArray = masterCardArray.concat();
            generateCards(playFieldSize2);
            playFieldCardArray = $(".back").toArray();
            playFieldCardArrayBeforeAssingment = playFieldCardArray.concat();
            for (let i = 0; i < playFieldSize2; i++) {
                $(playFieldCardArray[i]).addClass(currentCardArray[i]);
            }
            jasmine.clock().tick(1000);
            expect(playFieldCardArray).not.toBe(playFieldCardArrayBeforeAssingment);
        });
    });
});

describe("function checkForMatch()", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(checkForMatch).toBeDefined();
    });

    describe("if cards match", function() {
        beforeEach(function() {
            setFixtures(`
                        <div class="playfield vhalign">
                            <div class='cardshell taken'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                            <div class='cardshell taken'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                        </div>`);
            let fieldActive;
        });

        it("should have $('.taken .back').length of 2", function() {
            expect($('.taken .back').length).toEqual(2);
        });

        it("should set fieldActive to false", function() {
            fieldActive = true;
            checkForMatch();
            jasmine.clock().tick(500);
            expect(fieldActive).toEqual(false);
        });

        it("should find classesCard1 =classesCard2", function() {
            let takenCard1, takenCard2;
            let classesCard1, classesCard2;
            checkForMatch();
            jasmine.clock().tick(1000);
            expect(classesCard1).toBe(classesCard2);
        });

        it("should call function matched()", function() {
            spyOn(window, 'matched');
            checkForMatch();
            jasmine.clock().tick(1000);
            expect(window.matched).toHaveBeenCalled();
        });
    });

    describe("if cards do NOT match", function() {
        beforeEach(function() {
            setFixtures(`
             <div class="playfield vhalign">
                        <div class='cardshell taken'>
                            <div class='card front vhalign'></div>
                            <div class='card back vhalign card9'></div>
                        </div>
                        <div class='cardshell taken'>
                            <div class='card front vhalign'></div>
                            <div class='card back vhalign card1'></div>
                        </div>
                    </div>`);
        });

        it("should call function notMatched()", function() {
            spyOn(window, 'notMatched');
            checkForMatch();
            jasmine.clock().tick(1000);
            expect(window.notMatched).toHaveBeenCalled();
        });
    });
});

describe("function matched()", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(matched).toBeDefined();
    });

    it("should call function popupMatch()", function() {
        spyOn(window, 'popupMatch');
        matched();
        jasmine.clock().tick(500);
        expect(window.popupMatch).toHaveBeenCalled();
    });

    it("should call function increasePoints()", function() {
        spyOn(window, 'increasePoints');
        matched();
        jasmine.clock().tick(1500);
        expect(window.increasePoints).toHaveBeenCalled();
    });

    describe("if cards match...", function() {
        beforeEach(function() {
            setFixtures(`<div class="playfield vhalign">
                            <div class='cardshell taken'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                            <div class='cardshell taken'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                        </div>`);
        });

        it("should add .dummycardshell, remove .cardshell, remove .dummycardshell", function() {
            matched();
            jasmine.clock().tick(2500);
            expect($('.taken').length).toBe(0);
            jasmine.clock().tick(500);
            expect($('.dummycardshell').length).toBe(2);
        });
    });

    describe(" when all cards have been found", function() {
        beforeEach(function() {
            setFixtures(`
                        <div class="playfield vhalign">
                            <div class='cardshell showMe'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                            <div class='cardshell showMe'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                        </div>`);
        });

        it("should call function gameCompleted()", function() {
            spyOn(window, 'gameCompleted');
            matched();
            jasmine.clock().tick(2500);
            expect(window.gameCompleted).toHaveBeenCalled();
        });
    });

    describe(" while not all cards have been found", function() {
        beforeEach(function() {
            setFixtures(`
                        <div class="playfield vhalign">
                            <div class='cardshell showMe'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                            <div class='cardshell showMe'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                             <div class='cardshell'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card2'></div>
                            </div>
                            <div class='cardshell'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card2'></div>
                            </div>
                        </div>`);
        });

        it("should call function whoIsNext()", function() {
            spyOn(window, 'whoIsNext');
            matched();
            jasmine.clock().tick(2500);
            expect(window.whoIsNext).toHaveBeenCalled();
            jasmine.clock().tick(300);
            expect(fieldActive).toBe(true);
        });
    });
});

describe("function notMatched()", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign">
                            <div class='cardshell taken'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                            <div class='cardshell taken'>
                                <div class='card front vhalign'></div>
                                <div class='card back vhalign card1'></div>
                            </div>
                        </div>`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(notMatched).toBeDefined();
    });

    it("should call function popupNoMatch()", function() {
        spyOn(window, 'popupNoMatch');
        notMatched();
        jasmine.clock().tick(500);
        expect(window.popupNoMatch).toHaveBeenCalled();
    });

    it("should remove .showMe and .taken class from .cardshell elements", function() {
        matched();
        jasmine.clock().tick(2000);
        expect($(".cardshell")).not.toHaveClass('showMe taken');
    });

    it("should call function changePlayer(currentPlayer)", function() {
        spyOn(window, 'changePlayer');
        notMatched();
        jasmine.clock().tick(2000);
        expect(window.changePlayer).toHaveBeenCalled();
    });

    it("should call function whoIsNext()", function() {
        spyOn(window, 'whoIsNext');
        notMatched();
        jasmine.clock().tick(2500);
        expect(window.whoIsNext).toHaveBeenCalled();
    });

    it("should set fieldActive to true", function() {
        notMatched();
        jasmine.clock().tick(3500);
        expect(fieldActive).toBe(true);
    });
});

describe("function increasePoints", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign">
                        <div class='cardshell taken'>
                            <div class='card front vhalign'></div>
                            <div class='card back vhalign card1'></div>
                        </div>
                        <div class='cardshell taken'>
                            <div class='card front vhalign'></div>
                            <div class='card back vhalign card1'></div>
                        </div>
                    </div>
                    <div class="scorePlayer1Field vhalign"></div>
                    <div class="scorePlayer2Field vhalign"></div>`);
        let scorePlayer1, scorePlayer2;
        let currentPlayer;
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(increasePoints).toBeDefined();
    });

    describe("if currentPlayer is Player1", function() {
        beforeEach(function() {
            scorePlayer1 = 0;
            currentPlayer = "Player1";
        });

        it("should assign player 1's color on matched cards", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer1Big').length).toEqual(2);
        });

        it("should call function changeFontsizeBigLogo()", function() {
            spyOn(window, 'changeFontsizeBigLogo');
            increasePoints();
            jasmine.clock().tick(1000);
            expect(window.changeFontsizeBigLogo).toHaveBeenCalled();
        });

        it("should increment player 1's points by 1", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect(scorePlayer1).toEqual(1);
        });

        it("should write player 1's new points value to DOM element", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect($('.scorePlayer1Field').html()).toEqual("1");
        });

        it("should add class bubbleIcon to .checkmarkPlayer1Big element", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer1Big')).toHaveClass('bubbleIcon');
        });
    });

    describe("if currentPlayer is Player2", function() {
        beforeEach(function() {
            scorePlayer2 = 0;
            currentPlayer = "Player2";
        });

        it("should assign player 2's color on matched cards", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer2Big').length).toEqual(2);
        });

        it("should call function changeFontsizeBigLogo()", function() {
            spyOn(window, 'changeFontsizeBigLogo');
            increasePoints();
            jasmine.clock().tick(1000);
            expect(window.changeFontsizeBigLogo).toHaveBeenCalled();
        });

        it("should increment player 2's points by 1", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect(scorePlayer2).toEqual(1);
        });

        it("should write player 2's new points value to DOM element", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect($('.scorePlayer2Field').html()).toEqual("1");
        });

        it("should add class bubbleIcon to .checkmarkPlayer2Big element", function() {
            increasePoints();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer2Big')).toHaveClass('bubbleIcon');
        });
    });

});

describe("function changeFontsizeBigLogo", function() {
    beforeEach(function() {
        setFixtures(`<div class="playfield vhalign">
                        <div class='cardshell taken'>
                            <div class='card front vhalign'></div>
                            <div class='card back vhalign card1'></div>
                        </div>
                        <div class='cardshell taken'>
                            <div class='card front vhalign'></div>
                            <div class='card back vhalign card1'></div>
                        </div>
                    </div>`);
        jasmine.clock().install();
        let CardRowlength;
        $(".playfield").css("width", "400px");
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(changeFontsizeBigLogo).toBeDefined();
    });

    describe("if CardRowlength is equal 3", function() {
        beforeEach(function() {
            CardRowlength = 3;
            increasePoints();
            jasmine.clock().tick(1000);
        });

        it("should set .checkmarkPlayer1Big font-size to 0.25x400px", function() {
            changeFontsizeBigLogo();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer1Big, .checkmarkPlayer2Big').css('font-size')).toEqual('100px');
        });
    });

    describe("if CardRowlength is equal 4", function() {
        beforeEach(function() {
            CardRowlength = 4;
            increasePoints();
            jasmine.clock().tick(1000);
        });

        it("should set .checkmarkPlayer1Big font-size to 0.22x400px", function() {
            changeFontsizeBigLogo();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer1Big, .checkmarkPlayer2Big').css('font-size')).toEqual('88.8889px');
        });
    });

    describe("if CardRowlength is equal 6", function() {
        beforeEach(function() {
            CardRowlength = 6;
            increasePoints();
            jasmine.clock().tick(1000);
        });

        it("should set .checkmarkPlayer1Big font-size to 0.1428x400px", function() {
            changeFontsizeBigLogo();
            jasmine.clock().tick(1000);
            expect($('.checkmarkPlayer1Big, .checkmarkPlayer2Big').css('font-size')).toEqual('57.1429px');
        });
    });
});

describe("function changePlayer()", function() {
    beforeEach(function() {
        let currentPlayer;
    });

    afterEach(function() {});

    it("should exist", function() {
        expect(changePlayer).toBeDefined();
    });

    describe("if currentPlayer is Player1", function() {
        beforeEach(function() {
            currentPlayer = "Player1";
        });

        it("should set currentPlayer to Player2", function() {
            changePlayer(currentPlayer);
            expect(currentPlayer).toEqual("Player2");
        });
    });

    describe("if currentPlayer is Player2", function() {
        beforeEach(function() {
            currentPlayer = "Player2";
        });


        it("should set currentPlayer to Player1", function() {
            changePlayer(currentPlayer);
            expect(currentPlayer).toEqual("Player1");
        });
    });
});

describe("function changeOpeningPlayer()", function() {
    beforeEach(function() {
        let ThisGameOpenedBy;
    });

    afterEach(function() {});

    it("should exist", function() {
        expect(changeOpeningPlayer).toBeDefined();
    });

    describe("if ThisGameOpenedBy is Player1", function() {
        beforeEach(function() {
            ThisGameOpenedBy = "Player1";
        });

        it("should set ThisGameOpenedBy to Player2", function() {
            changeOpeningPlayer(ThisGameOpenedBy);
            expect(ThisGameOpenedBy).toEqual("Player2");
        });
    });

    describe("if ThisGameOpenedBy is Player2", function() {
        beforeEach(function() {
            ThisGameOpenedBy = "Player2";
        });

        it("should set ThisGameOpenedBy to Player1", function() {
            changeOpeningPlayer(ThisGameOpenedBy);
            expect(ThisGameOpenedBy).toEqual("Player1");
        });
    });
});

describe("function gameCompleted", function() {
    beforeEach(function() {
        setFixtures(`<div class="popup popupGameCompleted popup-font vhalign"></div>`);
        let scorePlayer1;
        let scorePlayer2;
        let namePlayer1;
        let namePlayer2;
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(gameCompleted).toBeDefined();
    });

    describe("if scorePlayer1 > scorePlayer2", function() {
        beforeEach(function() {});

        afterEach(function() {});

        it("should set $('.popupGameCompleted').html() to 'Player1 has won!'", function() {
            namePlayer1 = "Player1";
            scorePlayer1 = 4;
            scorePlayer2 = 3;
            gameCompleted();
            jasmine.clock().tick(1000);
            expect($('.popupGameCompleted').html()).toEqual(namePlayer1 + " has won!");
        });
    });

    describe("if scorePlayer2 > scorePlayer1", function() {
        beforeEach(function() {});

        it("should set $('.popupGameCompleted').html() to 'Player2 has won!'", function() {
            scorePlayer1 = 2;
            scorePlayer2 = 4;
            namePlayer2 = "Player2";
            gameCompleted();
            jasmine.clock().tick(1000);
            expect($('.popupGameCompleted').html()).toEqual('Player2 has won!');
        });
    });

    describe("if scorePlayer2 == scorePlayer1", function() {
        beforeEach(function() {});

        it("should set $('.popupGameCompleted').html() to 'Player1 and Player2 have same points!'", function() {
            scorePlayer1 = 4;
            scorePlayer2 = 4;
            namePlayer1 = "Player1";
            namePlayer2 = "Player2";
            gameCompleted();
            jasmine.clock().tick(1000);
            expect($('.popupGameCompleted').html()).toEqual('Player1 and Player2 have same points!');
        });
    });

    it("should move popupGameCompleted above playfield before made visible", function() {
        $('.popupGameCompleted').css({ 'position': 'absolute', 'z-index': 100 });
        gameCompleted();
        jasmine.clock().tick(1000);
        expect($('.popupGameCompleted').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)');
        expect($('.popupGameCompleted').css("z-index")).toEqual("100");
        expect($('.popupGameCompleted').css("opacity")).toEqual("1");
    });

    it("should call function changeOpeningPlayer()", function() {
        spyOn(window, 'changeOpeningPlayer');
        gameCompleted();
        jasmine.clock().tick(1000);
        expect(window.changeOpeningPlayer).toHaveBeenCalled();
    });

    it("should set popupGameCompleted to opacity 0", function() {
        gameCompleted();
        jasmine.clock().tick(5000);
        expect($('.popupGameCompleted').css("opacity")).toEqual("0");
    });

    it("should set firstAttemptDone to 0", function() {
        gameCompleted();
        jasmine.clock().tick(5000);
        expect(firstAttemptDone).toEqual(0);
    });

    it("should call function makeBtnActiveButStart()", function() {
        spyOn(window, 'makeBtnActiveButStart');
        gameCompleted();
        jasmine.clock().tick(5000);
        expect(window.makeBtnActiveButStart).toHaveBeenCalled();
    });

    it("should move popupGameCompleted under playfield", function() {
        $('.popupGameCompleted').css({ 'position': 'absolute', 'z-index': -100 });
        gameCompleted();
        jasmine.clock().tick(6200);
        expect($('.popupGameCompleted').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -10, 1)');
        expect($('.popupGameCompleted').css("z-index")).toEqual("-100");
    });
});

describe("function whoIsNext()", function() {
    beforeEach(function() {
        let firstAttemptDone;
        let ThisGameOpenedBy;
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(whoIsNext).toBeDefined();
    });

    describe("if first move has not been made and ThisGameOpenedBy is Player1", function() {
        beforeEach(function() {
            firstAttemptDone = 0;
            ThisGameOpenedBy = "Player1";
        });

        it("should set currentPlayer to Player1", function() {
            whoIsNext();
            jasmine.clock().tick(1000);
            expect(currentPlayer).toEqual("Player1");
        });

        it("should call function setActivePlayer(currentPlayer)", function() {
            spyOn(window, 'setActivePlayer');
            whoIsNext();
            jasmine.clock().tick(1000);
            expect(window.setActivePlayer).toHaveBeenCalled();
        });
    });

    describe("if first move has not been made and ThisGameOpenedBy is Player2", function() {
        beforeEach(function() {
            firstAttemptDone = 0;
            ThisGameOpenedBy = "Player2";
        });

        it("should set currentPlayer to Player2", function() {
            whoIsNext();
            jasmine.clock().tick(1000);
            expect(currentPlayer).toEqual("Player2");
        });

        it("should call function setActivePlayer(currentPlayer)", function() {
            spyOn(window, 'setActivePlayer');
            whoIsNext();
            jasmine.clock().tick(1000);
            expect(window.setActivePlayer).toHaveBeenCalled();
        });
    });

    describe("if first move has been made and currentPlayer is Player1", function() {
        beforeEach(function() {
            firstAttemptDone = 1;
            currentPlayer = "Player1";
        });

        it("should call function setActivePlayer(currentPlayer)", function() {
            spyOn(window, 'setActivePlayer');
            whoIsNext();
            jasmine.clock().tick(1000);
            expect(window.setActivePlayer).toHaveBeenCalled();
        });
    });

    describe("if first move has been made and currentPlayer is Player2", function() {
        beforeEach(function() {
            firstAttemptDone = 1;
            currentPlayer = "Player2";
        });

        it("should call function setActivePlayer(currentPlayer)", function() {
            spyOn(window, 'setActivePlayer');
            whoIsNext();
            jasmine.clock().tick(1000);
            expect(window.setActivePlayer).toHaveBeenCalled();
        });
    });
});

describe("function popupMatch", function() {
    beforeEach(function() {
        setFixtures(`<div class="popup popupMatch popup-font vhalign">Found match!</div>`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(popupMatch).toBeDefined();
    });

    it("should move popupMatch above playfield before made visible", function() {
        $('.popupMatch').css({ 'position': 'absolute', 'z-index': 400 });
        popupMatch();
        jasmine.clock().tick(1000);
        expect($('.popupMatch').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 400, 1)');
        expect($('.popupMatch').css("z-index")).toEqual("400");
    });

    it("should set popupMatch to opacity 1", function() {
        popupMatch();
        jasmine.clock().tick(1000);
        expect($('.popupMatch').css("opacity")).toEqual("1");
    });

    it("should set popupMatch to opacity 0", function() {
        popupMatch();
        jasmine.clock().tick(2000);
        expect($('.popupMatch').css("opacity")).toEqual("0");
    });

    it("should move popupMatch under playfield", function() {
        $('.popupMatch').css({ 'position': 'absolute', 'z-index': -1 });
        popupMatch();
        jasmine.clock().tick(5000);
        expect($('.popupMatch').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -10, 1)');
        expect($('.popupMatch').css("z-index")).toEqual("-1");
    });
});

describe("function popupNoMatch", function() {
    beforeEach(function() {
        setFixtures(`<div class="popup popupNoMatch popup-font vhalign">No match :(</div>`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(popupNoMatch).toBeDefined();
    });

    it("should move popupNoMatch above playfield before made visible", function() {
        $('.popupNoMatch').css({ 'position': 'absolute', 'z-index': 400 });
        popupNoMatch();
        jasmine.clock().tick(1000);
        expect($('.popupNoMatch').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 400, 1)');
        expect($('.popupNoMatch').css("z-index")).toEqual("400");
    });

    it("should set popupNoMatch to opacity 1", function() {
        popupNoMatch();
        jasmine.clock().tick(1000);
        expect($('.popupNoMatch').css("opacity")).toEqual("1");
    });

    it("should set popupNoMatch to opacity 0", function() {
        popupNoMatch();
        jasmine.clock().tick(2000);
        expect($('.popupNoMatch').css("opacity")).toEqual("0");
    });

    it("should move popupNoMatch under playfield", function() {
        $('.popupNoMatch').css({ 'position': 'absolute', 'z-index': -1 });
        popupNoMatch();
        jasmine.clock().tick(5000);
        expect($('.popupNoMatch').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -10, 1)');
        expect($('.popupNoMatch').css("z-index")).toEqual("-1");
    });
});

describe("function make_field8BtnVisActive", function() {
    beforeEach(function() {
        setFixtures(`<div class="field8Btn DosisFont">4 x 2</div>
                    <div class="field16Btn DosisFont">4 x 4</div>
                    <div class="field36Btn DosisFont">6 x 6</div>`);
        jasmine.clock().install();
        make_field8BtnVisActive();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(make_field8BtnVisActive).toBeDefined();
    });

    it("should assign class .selectedSize to .field8Btn and remove class .bg-fieldSizeBtn from .field8Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field8Btn')).toHaveClass('selectedSize');
        expect($('.field8Btn')).not.toHaveClass('bg-fieldSizeBtn');
    });

    it("should remove class .selectedSize of .field16Btn and add class .bg-fieldSizeBtn to .field16Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field16Btn')).not.toHaveClass('selectedSize');
        expect($('.field16Btn')).toHaveClass('bg-fieldSizeBtn');
    });

    it("should remove class .selectedSize of .field36Btn and add class .bg-fieldSizeBtn to .field36Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field36Btn')).not.toHaveClass('selectedSize');
        expect($('.field36Btn')).toHaveClass('bg-fieldSizeBtn');
    });
});

describe("function make_field16BtnVisActive", function() {
    beforeEach(function() {
        setFixtures(`<div class="field8Btn DosisFont">4 x 2</div>
                    <div class="field16Btn DosisFont">4 x 4</div>
                    <div class="field36Btn DosisFont">6 x 6</div>`);
        jasmine.clock().install();
        make_field16BtnVisActive();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(make_field16BtnVisActive).toBeDefined();
    });

    it("should remove class .selectedSize from .field8Btn and add class .bg-fieldSizeBtn to .field8Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field8Btn')).not.toHaveClass('selectedSize');
        expect($('.field8Btn')).toHaveClass('bg-fieldSizeBtn');
    });

    it("should add class .selectedSize to .field16Btn and remove class .bg-fieldSizeBtn from .field16Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field16Btn')).toHaveClass('selectedSize');
        expect($('.field16Btn')).not.toHaveClass('bg-fieldSizeBtn');
    });

    it("should remove class .selectedSize of .field36Btn and add class .bg-fieldSizeBtn to .field36Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field36Btn')).not.toHaveClass('selectedSize');
        expect($('.field36Btn')).toHaveClass('bg-fieldSizeBtn');
    });
});

describe("function make_field36BtnVisActive", function() {
    beforeEach(function() {
        setFixtures(`<div class="field8Btn DosisFont">4 x 2</div>
                    <div class="field16Btn DosisFont">4 x 4</div>
                    <div class="field36Btn DosisFont">6 x 6</div>`);
        jasmine.clock().install();
        make_field36BtnVisActive();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(make_field36BtnVisActive).toBeDefined();
    });

    it("should remove class .selectedSize from .field8Btn and add class .bg-fieldSizeBtn to .field8Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field8Btn')).not.toHaveClass('selectedSize');
        expect($('.field8Btn')).toHaveClass('bg-fieldSizeBtn');
    });

    it("should remove class .selectedSize from .field16Btn and add class .bg-fieldSizeBtn to .field16Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field16Btn')).not.toHaveClass('selectedSize');
        expect($('.field16Btn')).toHaveClass('bg-fieldSizeBtn');
    });

    it("should add class .selectedSize to .field36Btn and remove class .bg-fieldSizeBtn from .field36Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field36Btn')).toHaveClass('selectedSize');
        expect($('.field36Btn')).not.toHaveClass('bg-fieldSizeBtn');
    });
});

describe("function makeBtnInactive", function() {
    beforeEach(function() {
        setFixtures(`<div class="btn btn-primary btn-lg enterPlayersBtn DosisFont">SignUp</div>
                    <div class="field8Btn DosisFont">4 x 2</div>
                    <div class="field16Btn DosisFont">4 x 4</div>
                    <div class="field36Btn DosisFont">6 x 6</div>
                    <div class="btn btn-primary btn-lg startBtn DosisFont">start</div>
                    <div class="btn btn-primary btn-lg stopBtn btnlocked DosisFont">stop</div>`);
        jasmine.clock().install();
        makeBtnInactive();
        let stopBtnActive = false;
        let fieldActive = false;
        let btnActive = true;
        let startBtnActive = true;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(makeBtnInactive).toBeDefined();
    });

    it("should add class .btnlocked to .enterPlayersBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.enterPlayersBtn')).toHaveClass('btnlocked');
    });

    it("should add class .btnlocked to .field8Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field8Btn')).toHaveClass('btnlocked');
    });
    it("should add class .btnlocked to .field16Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field16Btn')).toHaveClass('btnlocked');
    });
    it("should add class .btnlocked to .field36Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field36Btn')).toHaveClass('btnlocked');
    });
    it("should add class .btnlocked to .startBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.startBtn')).toHaveClass('btnlocked');
    });
    it("should remove class .btnlocked from .stopBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.stopBtn')).not.toHaveClass('btnlocked');
    });

    it("should set stopBtnActive to true", function() {
        jasmine.clock().tick(1000);
        expect(stopBtnActive).toEqual(true);
    });

    it("should set fieldActive to true", function() {
        jasmine.clock().tick(1000);
        expect(fieldActive).toEqual(true);
    });

    it("should set btnActive to false", function() {
        jasmine.clock().tick(1000);
        expect(btnActive).toEqual(false);
    });

    it("should set startBtnActive to false", function() {
        jasmine.clock().tick(1000);
        expect(startBtnActive).toEqual(false);
    });
});

describe("function makeBtnActive", function() {
    beforeEach(function() {
        setFixtures(`<div class="btn btn-primary btn-lg enterPlayersBtn DosisFont">SignUp</div>
                    <div class="field8Btn DosisFont">4 x 2</div>
                    <div class="field16Btn DosisFont">4 x 4</div>
                    <div class="field36Btn DosisFont">6 x 6</div>
                    <div class="btn btn-primary btn-lg startBtn DosisFont">start</div>
                    <div class="btn btn-primary btn-lg stopBtn btnlocked DosisFont">stop</div>`);
        jasmine.clock().install();
        makeBtnActive();
        let btnActive = false;
        let startBtnActive = false;
        let stopBtnActive = true;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(makeBtnActive).toBeDefined();
    });

    it("should remove class .btnlocked from .enterPlayersBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.enterPlayersBtn')).not.toHaveClass('btnlocked');
    });

    it("should remove .btnlocked from .field8Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field8Btn')).not.toHaveClass('btnlocked');
    });
    it("should remove class .btnlocked from .field16Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field16Btn')).not.toHaveClass('btnlocked');
    });
    it("should remove class .btnlocked from .field36Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field36Btn')).not.toHaveClass('btnlocked');
    });
    it("should remove class .btnlocked from .startBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.startBtn')).not.toHaveClass('btnlocked');
    });
    it("should add class .btnlocked to .stopBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.stopBtn')).toHaveClass('btnlocked');
    });

    it("should set btnActive to true", function() {
        jasmine.clock().tick(1000);
        expect(btnActive).toEqual(true);
    });

    it("should set startBtnActive to true", function() {
        jasmine.clock().tick(1000);
        expect(startBtnActive).toEqual(true);
    });

    it("should set stopBtnActive to false", function() {
        jasmine.clock().tick(1000);
        expect(stopBtnActive).toEqual(false);
    });
});

describe("function makeBtnActiveButStart", function() {
    beforeEach(function() {
        setFixtures(`<div class="btn btn-primary btn-lg enterPlayersBtn DosisFont">SignUp</div>
                    <div class="field8Btn DosisFont">4 x 2</div>
                    <div class="field16Btn DosisFont">4 x 4</div>
                    <div class="field36Btn DosisFont">6 x 6</div>
                    <div class="btn btn-primary btn-lg stopBtn btnlocked DosisFont">stop</div>`);
        jasmine.clock().install();
        makeBtnActiveButStart();
        let btnActive = false;
        let fieldActive = true;
        let stopBtnActive = true;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(makeBtnActiveButStart).toBeDefined();
    });

    it("should remove class .btnlocked from .enterPlayersBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.enterPlayersBtn')).not.toHaveClass('btnlocked');
    });

    it("should remove .btnlocked from .field8Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field8Btn')).not.toHaveClass('btnlocked');
    });
    it("should remove class .btnlocked from .field16Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field16Btn')).not.toHaveClass('btnlocked');
    });
    it("should remove class .btnlocked from .field36Btn", function() {
        jasmine.clock().tick(1000);
        expect($('.field36Btn')).not.toHaveClass('btnlocked');
    });

    it("should add class .btnlocked to .stopBtn", function() {
        jasmine.clock().tick(1000);
        expect($('.stopBtn')).toHaveClass('btnlocked');
    });

    it("should set btnActive to true", function() {
        jasmine.clock().tick(1000);
        expect(btnActive).toEqual(true);
    });

    it("should set fieldActive to false", function() {
        jasmine.clock().tick(1000);
        expect(fieldActive).toEqual(false);
    });

    it("should set stopBtnActive to false", function() {
        jasmine.clock().tick(1000);
        expect(stopBtnActive).toEqual(false);
    });
});

describe("function resetCounters", function() {
    beforeEach(function() {
        setFixtures(`<div class="scorePlayer1Field vhalign">0</div>
        <div class="scorePlayer2Field vhalign">0</div>`);
        jasmine.clock().install();
        let scorePlayer1, scorePlayer2;
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(resetCounters).toBeDefined();
    });

    it("should set scorePlayer1 to 0", function() {
        scorePlayer1 = 2;
        resetCounters();
        expect(scorePlayer1).not.toEqual(2);
        expect(scorePlayer1).toEqual(0);
    });

    it("should set DOM element .scorePlayer1Field to html('0')", function() {
        resetCounters();
        expect($('.scorePlayer1Field').html()).toEqual("0");
    });

    it("should set scorePlayer2 to 0", function() {
        scorePlayer2 = 2;
        resetCounters();
        expect(scorePlayer2).not.toEqual(2);
        expect(scorePlayer2).toEqual(0);
    });

    it("should set DOM element .scorePlayer2Field to html('0')", function() {
        resetCounters();
        expect($('.scorePlayer2Field').html()).toEqual("0");
    });
});

describe("function showRegistrationPopup", function() {
    beforeEach(function() {
        setFixtures(`<div id="enterPlayersModal">
        <div class="bannerPopup vhalign">
            <div class="headRegister vhalign">SignUp players</div>
        </div>
        <div class="registrationText HowToRegFont vhalign">Welcome to the memory game!<br>Please enter player's name.</div>
        <div class="formWrapper">
            <div class="formItems HowToRegFont">Player 1's name: </div>
            <div class="formItems"><input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="">
            </div>
            <div class="formItems HowToRegFont">Player 2's name: </div>
            <div class="formItems"><input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="">
            </div>
        </div>
        <div class="saveBtnWrapper vhalign">
            <div class="btn btn-default btn-success HowToRegFont" id="saveBtn">Save</div>
        </div>
    </div>`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(showRegistrationPopup).toBeDefined();
    });

    it("should move #enterPlayersModal above playfield before made visible", function() {
        $('#enterPlayersModal').css({ 'position': 'absolute', 'z-index': 400 });
        showRegistrationPopup();
        expect($('#enterPlayersModal').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 400, 1)');
        expect($('#enterPlayersModal').css("z-index")).toEqual("400");
    });

    it("should set #enterPlayersModal to opacity 1", function() {
        showRegistrationPopup();
        jasmine.clock().tick(1000);
        expect($('#enterPlayersModal').css("opacity")).toEqual("1");
    });
});

describe("function showHowToPopup", function() {
    beforeEach(function() {
        setFixtures(`<div id="howToModal">
        <div class="bannerPopup vhalign">
            <div class="headHowTo vhalign">How to play this game</div>
        </div>
        <div class="ruleset vhalign">
            <p class="">This game is intended to train your memory skills. It is being played by two players.</p>
            <p class="">Select then the size of playfield and hit the start button.</p>
            <p class="">Each player clicks two cards per round. If you succeeded and have found a match, the same player can continue and try next. If no pair was found, the other player is next. The player who has found the most pairs, wins the game.</p>
            <p class="">To start over a game, stop the current game and re-select playfield size.</p>
            <p class="havefun">Have fun and a good memory! :)</p>
        </div>
        <div class="gotItBtnWrapper vhalign">
            <div class="btn btn-default btn-success HowToRegFont" id="gotItBtn">Got it!</div>
        </div>
    </div>`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(showHowToPopup).toBeDefined();
    });

    it("should move #howToModal above playfield before made visible", function() {
        $('#howToModal').css({ 'position': 'absolute', 'z-index': 400 });
        showHowToPopup();
        expect($('#howToModal').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 400, 1)');
        expect($('#howToModal').css("z-index")).toEqual("400");
    });

    it("should set #howToModal to opacity 1", function() {
        showHowToPopup();
        jasmine.clock().tick(1000);
        expect($('#howToModal').css("opacity")).toEqual("1");
    });
});

describe("function checkNames", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(checkNames).toBeDefined();
    });

    describe("if #nameFieldPlayer1Form or #nameFieldPlayer2Form is empty", function() {
        beforeEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="">
        <div class="popup popupCheckNames popup-font vhalign"></div>`);
        });

        afterEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="">`);
        });

        it("should set $('.popupCheckNames').html() to 'Please fill in names<br> in both fields.'", function() {
            checkNames();
            jasmine.clock().tick(1000);
            expect($('.popupCheckNames').html()).toEqual('Please fill in names<br> in both fields.');
        });

        it("should call function popupCheckNames()", function() {
            spyOn(window, 'popupCheckNames');
            checkNames();
            jasmine.clock().tick(1000);
            expect(window.popupCheckNames).toHaveBeenCalled();
        });
    });

    describe("if #nameFieldPlayer1Form or #nameFieldPlayer2Form have more than 8chars", function() {
        beforeEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="Player1TooLong">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="Player2TooLong">
        <div class="popup popupCheckNames popup-font vhalign"></div>`);
        });

        afterEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="">`);
        });

        it("should set $('.popupCheckNames').html() to 'Please fill in names with no more than 8 characters.'", function() {
            checkNames();
            jasmine.clock().tick(1000);
            expect($('.popupCheckNames').html()).toEqual('Please fill in names with no more than 8 characters.');
        });

        it("should call function popupCheckNames()", function() {
            spyOn(window, 'popupCheckNames');
            checkNames();
            jasmine.clock().tick(1000);
            expect(window.popupCheckNames).toHaveBeenCalled();
        });
    });

    describe("if #nameFieldPlayer1Form or #nameFieldPlayer2Form have same name", function() {
        beforeEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="Fred">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="Fred">
        <div class="popup popupCheckNames popup-font vhalign"></div>`);
        });

        afterEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="">`);
        });

        it("should set $('.popupCheckNames').html() to 'Please provide different<br> names for each player.'", function() {
            checkNames();
            jasmine.clock().tick(1000);
            expect($('.popupCheckNames').html()).toEqual('Please provide different<br> names for each player.');
        });

        it("should call function popupCheckNames()", function() {
            spyOn(window, 'popupCheckNames');
            checkNames();
            jasmine.clock().tick(1000);
            expect(window.popupCheckNames).toHaveBeenCalled();
        });
    });

    describe("if #nameFieldPlayer1Form and #nameFieldPlayer2Form have different names", function() {
        beforeEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="Bro">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="Dude">
        <div class="popup popupCheckNames popup-font vhalign"></div>`);
        });

        afterEach(function() {
            setFixtures(`<input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="">
        <input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="">`);
        });

        it("should call function processNames()", function() {
            spyOn(window, 'processNames');
            checkNames();
            jasmine.clock().tick(1000);
            expect(window.processNames).toHaveBeenCalled();
        });
    });
});

describe("function popupCheckNames", function() {
    beforeEach(function() {
        setFixtures(`<div class="popup popupCheckNames popup-font vhalign"></div>`);
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(popupCheckNames).toBeDefined();
    });

    it("should move popupCheckNames above playfield before made visible", function() {
        $('.popupCheckNames').css({ 'position': 'absolute', 'z-index': 500 });
        popupCheckNames();
        jasmine.clock().tick(1000);
        expect($('.popupCheckNames').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 500, 1)');
        expect($('.popupCheckNames').css("z-index")).toEqual("500");
    });

    it("should set popupCheckNames to opacity 1", function() {
        popupCheckNames();
        jasmine.clock().tick(500);
        expect($('.popupCheckNames').css("opacity")).toEqual("1");
    });

    it("should set popupCheckNames to opacity 0", function() {
        popupCheckNames();
        jasmine.clock().tick(2500);
        expect($('.popupCheckNames').css("opacity")).toEqual("0");
    });

    it("should move popupCheckNames under playfield", function() {
        $('.popupCheckNames').css({ 'position': 'absolute', 'z-index': -1 });
        popupCheckNames();
        jasmine.clock().tick(3000);
        expect($('.popupCheckNames').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -10, 1)');
        expect($('.popupCheckNames').css("z-index")).toEqual("-1");
    });
});

describe("function processNames", function() {

    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("should exist", function() {
        expect(processNames).toBeDefined();
    });

    describe("steps for processing form values", function() {
        beforeEach(function() {
            setFixtures(`<div id="enterPlayersModal">
        <div class="bannerPopup vhalign">
            <div class="headRegister vhalign">SignUp players</div>
        </div>
        <div class="registrationText HowToRegFont vhalign">Welcome to the memory game!<br>Please enter player's name.</div>
        <div class="formWrapper">
            <div class="formItems HowToRegFont">Player 1's name: </div>
            <div class="formItems"><input type="text" class="form-control HowToRegFont" id="nameFieldPlayer1Form" placeholder="Pls enter name" value="Human1">
            </div>
            <div class="formItems HowToRegFont">Player 2's name: </div>
            <div class="formItems"><input type="text" class="form-control HowToRegFont" id="nameFieldPlayer2Form" placeholder="Pls enter name" value="Human2">
            </div>
        </div>
        <div class="saveBtnWrapper vhalign">
            <div class="btn btn-default btn-success HowToRegFont" id="saveBtn">Save</div>
        </div>
    </div><div class="namePlayer1Field vhalign">Player1:</div>
    <div class="namePlayer2Field vhalign">Player2:</div>`);
            let namePlayer1;
            let namePlayer2;
        });

        it("should assign value of #nameFieldPlayer1Form to namePlayer1", function() {
            processNames();
            jasmine.clock().tick(1000);
            expect(namePlayer1).toEqual("Human1");
        });

        it("should assign value of namePlayer1 to $('namePlayer1Field').html()", function() {
            processNames();
            jasmine.clock().tick(1000);
            expect($('.namePlayer1Field').html()).toEqual(namePlayer1 + ": ");
        });

        it("should assign value of #nameFieldPlayer2Form to namePlayer2", function() {
            processNames();
            jasmine.clock().tick(1000);
            expect(namePlayer2).toEqual("Human2");
        });

        it("should assign value of namePlayer2 to $('namePlayer2Field').html()", function() {
            processNames();
            jasmine.clock().tick(1000);
            expect($('.namePlayer2Field').html()).toEqual(namePlayer2 + ": ");
        });

        it("should set #enterPlayersModal to opacity 0", function() {
            processNames();
            jasmine.clock().tick(2500);
            expect($('#enterPlayersModal').css("opacity")).toEqual("0");
        });

        it("should move #enterPlayersModal under playfield", function() {
            $('#enterPlayersModal').css({ 'position': 'absolute', 'z-index': -1 });
            processNames();
            jasmine.clock().tick(1500);
            expect($('#enterPlayersModal').css("transform")).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -10, 1)');
            expect($('#enterPlayersModal').css("z-index")).toEqual("-1");
        });
    });
});

 */