const { library } = require("./library");
const { expect } = require('chai');

describe('library', () => {

    it ('calcPriceOfBook method', () => {

        expect(library.calcPriceOfBook('It', 1981)).equal('Price of It is 20.00');
        expect(library.calcPriceOfBook('It', 2000)).equal('Price of It is 20.00');
        expect(library.calcPriceOfBook('It', 1980)).equal('Price of It is 10.00');
        expect(library.calcPriceOfBook('It', 1960)).equal('Price of It is 10.00');

        expect(() => library.calcPriceOfBook(5, 1960)).throw('Invalid input');
        expect(() => library.calcPriceOfBook(5, '1960')).throw('Invalid input');
        expect(() => library.calcPriceOfBook(5, 19.60)).throw('Invalid input');
        expect(() => library.calcPriceOfBook('It', 19.60)).throw('Invalid input');
    });

    it('findBook method', () => {

        expect(library.findBook(["Troy", "Life Style", "Torronto"],"Torronto")).equal('We found the book you want.');
        expect(library.findBook(["Troy", "Life Style", "Torronto"],"It")).equal('The book you are looking for is not here!');

        expect(() => library.findBook([],"It")).throw('No books currently available');
    });

    it('arrangeTheBooks method', () => {

        expect(library.arrangeTheBooks(40)).equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(20)).equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(41)).equal('Insufficient space, more shelves need to be purchased.');
        expect(library.arrangeTheBooks(50)).equal('Insufficient space, more shelves need to be purchased.');

        expect(() => library.arrangeTheBooks("40")).throw('Invalid input');
        expect(() => library.arrangeTheBooks(-1)).throw('Invalid input');
        expect(() => library.arrangeTheBooks(10.22)).throw('Invalid input');
    });
});