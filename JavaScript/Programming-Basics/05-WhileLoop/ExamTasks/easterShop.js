function solve(input) {

    let eggs = Number(input[0]);

    let orderIndex = 1;
    let eggsIndex = 2;
    let eggsSales = 0;

    for (let i = 1; i < input.length; i++) {

        let orderCount = input[orderIndex];
        orderIndex += 2;
        let eggCount = Number(input[eggsIndex]);

        switch (orderCount) {

            case 'Fill': eggs += eggCount; break;
        }

        if (eggs < eggCount) {

            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${eggs}.`);

            break;
        }

        if (orderCount === 'Buy') {

            eggs -= eggCount;
            eggsSales += eggCount;
        }

        if (orderCount === 'Close') {

            console.log(`Store is closed!`);
            console.log(`${eggsSales} eggs sold.`);

            break;
        }

        eggsIndex += 2;
    }
}

solve(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
//solve(["20","Fill","30","Buy","15","Buy","20","Close"]);