const { companyAdministration } = require("./companyAdministration");
const { expect } = require('chai');

describe('companyAdministration', () => {

    it('hiringEmployee method', () => {

        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).equal('Ivan is not approved for this position.');
        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2.9)).equal('Ivan is not approved for this position.');
        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2.99)).equal('Ivan is not approved for this position.');

        expect(companyAdministration.hiringEmployee('Dimitar', 'Programmer', 3)).equal('Dimitar was successfully hired for the position Programmer.');
        expect(companyAdministration.hiringEmployee('Dimitar', 'Programmer', 5)).equal('Dimitar was successfully hired for the position Programmer.');

        expect(companyAdministration.hiringEmployee.bind('Ivan', 'Driver', 3)).throw('We are not looking for workers for this position.');
        expect(companyAdministration.hiringEmployee.bind('Jim', 'Bucher', 5)).throw('We are not looking for workers for this position.');
    });

    it('calculateSalary method', () => {

        expect(companyAdministration.calculateSalary(80)).equal(1200);
        expect(companyAdministration.calculateSalary(160)).equal(2400);
        expect(companyAdministration.calculateSalary(161)).equal(3415);

        expect(companyAdministration.calculateSalary(200)).equal(4000);
        expect(companyAdministration.calculateSalary(0)).equal(0);
        expect(companyAdministration.calculateSalary(1)).equal(15);

        expect(companyAdministration.calculateSalary.bind(-80)).throw('Invalid hours');
        expect(companyAdministration.calculateSalary.bind(-1)).throw('Invalid hours');

        expect(companyAdministration.calculateSalary.bind('80')).throw('Invalid hours');
        expect(companyAdministration.calculateSalary.bind([20])).throw('Invalid hours');
        expect(companyAdministration.calculateSalary.bind()).throw('Invalid hours');
        expect(companyAdministration.calculateSalary.bind(false)).throw('Invalid hours');
    });

    it('firedEmployee method', () => {

        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).equal('Petar, Ivan');
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).equal('Ivan, George');
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).equal('Petar, George');
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George", 'Jim', 'Stamat'], 3)).equal('Petar, Ivan, George, Stamat');
        expect(companyAdministration.firedEmployee(["Petar"], 0)).equal('');
       
        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"], -2)).throw('Invalid input');
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"], 2.4)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"], -2.4)).throw('Invalid input');
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1.3)).throw('Invalid input');

        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"], 5)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"], 3)).throw('Invalid input');

        // unfortunately .bind is not working for every test...

        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '2')).throw('Invalid input');
        expect(() => companyAdministration.firedEmployee(3, '5')).throw('Invalid input');
        expect(() => companyAdministration.firedEmployee(-1, 0)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(1, 0)).throw('Invalid input');

        expect(companyAdministration.firedEmployee.bind([], 2)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind('Pesho', 2)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind('Pesho', 0)).throw('Invalid input');

        expect(companyAdministration.firedEmployee.bind({}, 0)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(2, 0)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"])).throw('Invalid input');

        expect(companyAdministration.firedEmployee.bind(["Petar", 20, "George"], 2)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(["Petar", 20, ['Jim']], 2)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(false, 2)).throw('Invalid input');
        expect(companyAdministration.firedEmployee.bind(["Petar", "Ivan", "George"], true)).throw('Invalid input');
        
    });
});