function solve(input) {

    let numberCoins1lv = Number(input[0]);
    let numberCoins2lv = Number(input[1]);
    let numberBanknote5lv = Number(input[2]);
    let sum = Number(input[3]);

    let nominal1lv = 1;
    let nominal2lv = 2;
    let nominal5lv = 5;

    for (let i = 0; i <= numberCoins1lv; i++) {

        for (let j = 0; j <= numberCoins2lv; j++) {

            for (let k = 0; k <= numberBanknote5lv; k++) {

                let result = (i * nominal1lv) + (j * nominal2lv) + (k * nominal5lv);

                if (result === sum) {

                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

// solve(['3','2','3','10']);
solve(['5', '3', '1', '7']);