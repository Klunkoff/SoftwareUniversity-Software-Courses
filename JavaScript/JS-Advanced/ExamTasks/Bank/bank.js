class Bank {

    constructor (bankName) {

        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        let findCustomer = this.allCustomers.find((person) => person.personalId == customer.personalId);

        if(findCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {

        let findCustomer = this.allCustomers.find((person) => person.personalId == personalId);

        if(!findCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if(!findCustomer.totalMoney) {
            findCustomer.totalMoney = 0;
            findCustomer.transaction = [];
        }

        findCustomer.totalMoney += amount;
        findCustomer.transaction.push({ type: 'made deposit of', currentAmount: amount});

        return `${findCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {

        let findCustomer = this.allCustomers.find((person) => person.personalId == personalId);

        if(!findCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if(findCustomer.totalMoney < amount) {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        findCustomer.totalMoney -= amount;
        findCustomer.transaction.push({ type: 'withdrew', currentAmount: amount});

        return `${findCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {

        let result = [];
        let findCustomer = this.allCustomers.find((person) => person.personalId == personalId);

        if(!findCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }

        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${findCustomer.firstName} ${findCustomer.lastName}`);
        result.push(`Customer ID: ${findCustomer.personalId}`);
        result.push(`Total Money: ${findCustomer.totalMoney}$`);
        result.push(`Transactions:`);

        for (let i = findCustomer.transaction.length; i >= 1; i--) {
            
            let currentTransaction = findCustomer.transaction[i - 1];

            result.push(`${i}. ${findCustomer.firstName} ${findCustomer.lastName} ${currentTransaction.type} ${currentTransaction.currentAmount}$!`);
        }

        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));