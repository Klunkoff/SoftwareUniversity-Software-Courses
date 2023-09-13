class Restaurant {
 
    constructor(budgetMoney) {
 
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
 
    loadProducts(products) {
 
        products.forEach(element => {
 
            let [productName, productQuantity, productTotalPrice] = element.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
 
            if (productTotalPrice <= this.budgetMoney) {
 
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
 
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
 
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
 
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });
 
        return this.history.join('\n');
    }
 
    addToMenu(meal, neededProducts, price) {
 
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: neededProducts, price };
 
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
 
        let mealNumber = Object.entries(this.menu).length;
 
        if (mealNumber == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
 
        } else if (mealNumber == 0 || mealNumber >= 2) {
            return `Great idea! Now with the ${meal} we have ${mealNumber} meals in the menu, other ideas?`;
        }
    }
 
    showTheMenu() {
 
        let entries = Object.entries(this.menu);
        let result = [];
 
        if (entries.length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }
 
        entries.forEach((el) => {
            result.push(`${el[0]} - $ ${el[1].price}`);
        });
 
        return result.join('\n');
    }
 
    makeTheOrder(meal) {
 
        let findedMeal = this.menu[meal];
 
        if (!findedMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
 
        for (let product of findedMeal.products) {
 
            let [name, quantity] = product.split(' ');
 
            if (!this.stockProducts.hasOwnProperty(name) || this.stockProducts[name] < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        };
 
        findedMeal.products.forEach((product) => {
 
            let [name, quantity] = product.split(' ');
            this.stockProducts[name] -= Number(quantity);
        });
        
        this.budgetMoney += findedMeal.price;
 
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${findedMeal.price}.`;
    }
}
 
// input 1
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10',
//     'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// input 2
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1',
//  'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1',
// 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// input 3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1',
//  'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1',
// 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
 
// input 4
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 50', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));