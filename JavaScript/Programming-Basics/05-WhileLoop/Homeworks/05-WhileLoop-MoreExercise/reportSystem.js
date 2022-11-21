function solve(input) {

    let index = 0;
    let charityMoney = Number(input[index]);
    index++;

    let transactionNum = 0;
    let cashPaymentNum = 0;
    let cardPaymentNum = 0;
    let cashSum = 0;
    let cardSum = 0;
    let isCharityMoneyCollect = false;

    let entryData = input[index];

    while (entryData !== 'End') {

        let countMoney = Number(entryData);
        index++;

        transactionNum++;

        if (transactionNum % 2 !== 0) {

            if (countMoney > 100) {

                console.log(`Error in transaction!`);

            } else {

                charityMoney -= countMoney;
                cashSum += countMoney;
                cashPaymentNum++;

                console.log(`Product sold!`);
            }

        } else {

            if (countMoney < 10) {

                console.log(`Error in transaction!`);

            } else {

                charityMoney -= countMoney;
                cardSum += countMoney;
                cardPaymentNum++;

                console.log(`Product sold!`);
            }
        }

        if (charityMoney <= 0) {

            isCharityMoneyCollect = true;

            break;
        }

        entryData = input[index];
    }

    if (isCharityMoneyCollect) {

        let averageCash = cashSum / cashPaymentNum;
        let averageCard = cardSum / cardPaymentNum;

        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);

    } else {

        console.log(`Failed to collect required money for charity.`);
    }
}

// solve(["500", "120", "8", "63", "256", "78", "317"]);
solve(["600", "86", "150", "98", "227", "End"]);