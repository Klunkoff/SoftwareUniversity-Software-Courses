const { cinema } = require("./cinema");
const {expect} = require('chai');
 
describe('cinema', () =>{
 
    it('showMovies method', () => {
 
        expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).equal('King Kong, The Tomorrow War, Joker');
        expect(cinema.showMovies(['The Tomorrow War', 'Joker'])).equal('The Tomorrow War, Joker');
    });
 
    it('showMovies method  - no movie', () => {
 
        expect(cinema.showMovies([])).equal('There are currently no movies to show.');
    });
 
    it('ticketPrice method', () => {
 
        expect(cinema.ticketPrice('Premiere')).equal(12.00);
        expect(cinema.ticketPrice('Normal')).equal(7.50);
        expect(cinema.ticketPrice('Discount')).equal(5.50);
    });
 
    it('ticketPrice method - wrong projection type', () => {
        
        expect(() => cinema.ticketPrice('Master')).throw('Invalid projection type.');
    });
 
    it('swapSeatsInHall method', () => {
 
        expect(cinema.swapSeatsInHall(15, 20)).equal('Successful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1, 7)).equal('Successful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1, '7')).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall('1', 7)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(7)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall()).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(15.20, 20)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(15.20, 20.20)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(15, 20.20)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(15, 21)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(55, 19)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(-1, 19)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(0, 19)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(10, -1)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(10, 0)).equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(0, -1)).equal('Unsuccessful change of seats in the hall.');
    });
});