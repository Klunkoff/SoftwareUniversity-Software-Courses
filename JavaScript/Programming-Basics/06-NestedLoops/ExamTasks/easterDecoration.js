function solve(input) {

    let index = 0;
    let clientNum = Number(input[index]);
    index++;

    let averageBill = 0;

    for (let i = 1; i <= clientNum; i++) {

        let productCount = input[index];
        index++;

        let purchasedProduct = 0;
        let customerBill = 0;

        while (productCount !== "Finish") {

            switch (productCount) {

                case 'basket': customerBill += 1.50; break;
                case 'wreath': customerBill += 3.80; break;
                case 'chocolate bunny': customerBill += 7; break;
            }

            purchasedProduct++;

            productCount = input[index];
            index++;
        }

        if (purchasedProduct % 2 === 0) {

            customerBill -= (customerBill * 0.2);
        }

        console.log(`You purchased ${purchasedProduct} items for ${customerBill.toFixed(2)} leva.`);

        averageBill += customerBill;
    }

    let averageBillResult = averageBill / clientNum;
    console.log(`Average bill per client is: ${averageBillResult.toFixed(2)} leva.`);
}

// solve(["2","basket","wreath","chocolate bunny","Finish","wreath",
// "chocolate bunny","Finish"]);
solve(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket",
    "chocolate bunny", "Finish"]);