const { bookSelection } = require("./bookSelection");
const { expect } = require('chai');
 
describe('bookSelection check', () => {
 
    it('isGenreSuitable method', () => {
 
        expect(bookSelection.isGenreSuitable('Thriller', 8)).equal('Books with Thriller genre are not suitable for kids at 8 age');
        expect(bookSelection.isGenreSuitable('Horror', 12)).equal('Books with Horror genre are not suitable for kids at 12 age');
        expect(bookSelection.isGenreSuitable('Comedy', 9)).equal('Those books are suitable');
    });
 
    it('isItAffordable method', () => {
 
        expect(bookSelection.isItAffordable(20, 50)).equal('Book bought. You have 30$ left');
        expect(bookSelection.isItAffordable(20, 20)).equal('Book bought. You have 0$ left');
        expect(bookSelection.isItAffordable(20, 10)).equal("You don't have enough money");
 
        expect(bookSelection.isItAffordable.bind('20', 30)).throw("Invalid input");
        expect(bookSelection.isItAffordable.bind(20, '30')).throw("Invalid input");
        expect(bookSelection.isItAffordable.bind('20', '30')).throw("Invalid input");
    });
 
    it('siutableTitles method', () => {
 
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.be.an('array').that.includes('The Da Vinci Code');
 
        expect(bookSelection.suitableTitles.bind([{ title: "The Da Vinci Code", genre: "Thriller" }], 30)).throw("Invalid input");
        expect(bookSelection.suitableTitles.bind(30, 'Thriller')).throw("Invalid input");
        expect(bookSelection.suitableTitles.bind(30, 30)).throw("Invalid input");
    });
});