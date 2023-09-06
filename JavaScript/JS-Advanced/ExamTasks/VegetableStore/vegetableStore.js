class VegetableStore {
 
    constructor(owner, location) {
 
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
 
    loadingVegetables(vegetables) {
 
        vegetables.forEach((vegetable) => {
 
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
 
            let findProductType = this.availableProducts.find((product) => product.type == type);
 
            if (findProductType) {
 
                findProductType.quantity += quantity;
 
                if (price > findProductType.price) {
 
                    findProductType.price = price;
                }
 
            } else {
 
                this.availableProducts.push({ type, quantity, price });
            }
        });
 
        let result = [];
        this.availableProducts.forEach((product) => result.push(product.type));
 
        return `Successfully added ${result.join(', ')}`;
    }
 
    buyingVegetables(selectedProducts) {
 
        let totalPrice = 0;
 
        selectedProducts.forEach((product) => {
 
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);
 
            let findProductType = this.availableProducts.find((product) => product.type == type);
 
            if (!findProductType) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
 
            if (quantity > findProductType.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
 
            totalPrice += findProductType.price * quantity;
            findProductType.quantity -= quantity;
        });
 
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
 
    rottingVegetable(type, quantity) {
 
        let findProductType = this.availableProducts.find((product) => product.type == type);
 
        if (!findProductType) {
            throw new Error(`${type} is not available in the store.`);
        }
 
        if (quantity > findProductType.quantity) {
 
            findProductType.quantity = 0;
 
            return `The entire quantity of the ${type} has been removed.`;
        }
 
        findProductType.quantity -= quantity;
 
        return `Some quantity of the ${type} has been removed.`;
    }
 
    revision() {
 
        let result = ['Available vegetables:'];
 
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach((product) => result.push(`${product.type}-${product.quantity}-$${product.price}`))
 
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
 
        return result.join('\n');
    }
}
 
// input 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// input 2
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//  console.log(vegStore.buyingVegetables(["Okra 1"]));
//  console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//  console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
// input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// input 4
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());