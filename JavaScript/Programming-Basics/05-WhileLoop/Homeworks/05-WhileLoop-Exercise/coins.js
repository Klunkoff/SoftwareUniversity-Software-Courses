function solve(input) {

    let change = Number(input[0]);
    let smallCoins = Math.floor(change * 100);
    let countCoin = 0;

    while (smallCoins !== 0) {

        countCoin++;

        if (smallCoins >= 200) {
            smallCoins -= 200;

        } else if (smallCoins >= 100) {
            smallCoins -= 100;

        } else if (smallCoins >= 50) {
            smallCoins -= 50;

        } else if (smallCoins >= 20) {
            smallCoins -= 20;

        } else if (smallCoins >= 10) {
            smallCoins -= 10;

        } else if (smallCoins >= 5) {
            smallCoins -= 5;

        } else if (smallCoins >= 2) {
            smallCoins -= 2;

        } else if (smallCoins >= 1) {
            smallCoins -= 1;
        }
    }

    console.log(countCoin);
}

// solve(["1.23"]);
// solve(["2"]);
solve(["0.56"]);
// solve(["2.73"]);