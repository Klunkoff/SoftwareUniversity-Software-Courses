const { movieTheater } = require("./movieTheater");
const { expect } = require('chai');

describe('Movie Theater task', () => {

    it('age restrictions method', () => {

        expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        expect(movieTheater.ageRestrictions('zzz')).to.equal('There are no age restrictions for this movie');
    });

    it ('money spent method', () => {

        expect(movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 44.50');
        expect(movieTheater.moneySpent(3, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 47.60');

        expect(movieTheater.moneySpent.bind('3', '22', '33')).to.throw('Invalid input');
        expect(movieTheater.moneySpent.bind('3', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
        expect(movieTheater.moneySpent.bind(3, 22, ['Soda', 'Water'])).to.throw('Invalid input');
        expect(movieTheater.moneySpent.bind(3, ['Nachos', 'Popcorn'], 22)).to.throw('Invalid input');
        expect(movieTheater.moneySpent.bind('3', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
    });

    it ('reservation method', () => {

        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 3 }], 5)).to.equal(1);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 }, { rowNumber: 2, freeSeats: 4 }], 2)).to.equal(2);

        expect(movieTheater.moneySpent.bind('3', '3')).to.throw('Invalid input');
        expect(movieTheater.moneySpent.bind('3', 3)).to.throw('Invalid input');
        expect(movieTheater.moneySpent.bind([{ rowNumber: 1, freeSeats: 2 }, { rowNumber: 2, freeSeats: 4 }], '3')).to.throw('Invalid input');
    });
});