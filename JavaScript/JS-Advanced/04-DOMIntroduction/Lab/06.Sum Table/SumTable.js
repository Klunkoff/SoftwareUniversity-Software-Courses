function sumTable() {

    let priceElements = document.querySelectorAll('tr td:nth-child(2)');
    let priceArray = Array.from(priceElements);
    let total = priceArray.pop();
    let sum = 0;

    for (price of priceArray) {

        sum += Number(price.textContent);
    }

    total.textContent = sum;
}