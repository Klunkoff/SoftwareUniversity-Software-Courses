function solve(input) {

    let index = 0;
    let loadsNum = Number(input[index]);
    index++;

    let allLoads = 0;
    let busLoads = 0;
    let truckLoads = 0;
    let trainLoads = 0;
    let allLoadsPrice = 0;

    for (let i = 1; i <= loadsNum; i++) {

        let countLoads = Number(input[index]);
        index++;
        allLoads += countLoads;

        if (countLoads <= 3) {
            allLoadsPrice += countLoads * 200;
            busLoads += countLoads;
        } else if (countLoads <= 11) {
            allLoadsPrice += countLoads * 175;
            truckLoads += countLoads;
        } else {
            allLoadsPrice += countLoads * 120;
            trainLoads += countLoads;
        }
    }

    let averagePrice = allLoadsPrice / allLoads;
    let percentBus = (busLoads / allLoads) * 100;
    let percenttruck = (truckLoads / allLoads) * 100;
    let percentTrain = (trainLoads / allLoads) * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${percentBus.toFixed(2)}%`);
    console.log(`${percenttruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

// solve(['4', '1', '5', '16', '3']);
solve(['5', '2', '10', '20', '1', '7']);