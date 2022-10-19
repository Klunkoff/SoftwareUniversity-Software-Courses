function solve(input) {

    let age = Number(input[0]);
    let washMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let birthDayMoney = 0;
    let birthDaySum = 0;
    let toyNumber = 0;
    let toySum = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            birthDayMoney += 10;
            birthDaySum += birthDayMoney - 1;
        } else {
            toyNumber++;
        }
    }

    toySum = toyNumber * toyPrice;

    let total = toySum + birthDaySum;
    let difference = Math.abs(total - washMashinePrice);

    if (total >= washMashinePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

solve(['21', '1570.98', '3']);
solve(['10', '170', '6']);