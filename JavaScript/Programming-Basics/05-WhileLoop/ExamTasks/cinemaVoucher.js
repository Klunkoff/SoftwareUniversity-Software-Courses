function cinemaVoucher(input) {

    let budget = Number(input.shift());
    let purchase = input.shift();

    let ticketCount = 0;
    let goodsCount = 0;

    while (purchase !== 'End') {

        if (purchase.length > 8) {

            let firstCharNum = purchase.charCodeAt(0);
            let secondCharNum = purchase.charCodeAt(1);
            let currentSum = firstCharNum + secondCharNum;
            budget -= currentSum;

            if (budget >= 0) {

                ticketCount++;

            } else {

                break;
            }

        } else {

            let firstCharNum = purchase.charCodeAt(0);
            budget -= firstCharNum;

            if (budget >= 0) {

                goodsCount++;

            } else {

                break;
            }
        }

        purchase = input.shift();
    }

    console.log(ticketCount);
    console.log(goodsCount);
}

// cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);