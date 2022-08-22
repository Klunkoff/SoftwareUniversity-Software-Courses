function solve(input) {

    let price = 7.61;
    let finalPrice = input[0] * price;
    let discount = 0.18 * finalPrice;
    let priceAfterDiscount = finalPrice - discount;

    console.log(`The final price is: ${priceAfterDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

solve([550]);
