function solve(input) {

    let budget = Number(input[0]);
    let videoCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoPrice = videoCount * 250;
    let oneProcessorPrice = videoPrice * 0.35;
    let oneRamPrice = videoPrice * 0.10;

    let allProcessorPrice = oneProcessorPrice * processorCount;
    let allRamPrice = oneRamPrice * ramCount;
    let totalPrice = videoPrice + allProcessorPrice + allRamPrice;

    if (videoCount > processorCount) {

        totalPrice = totalPrice - (totalPrice * 0.15);

    } if (budget >= totalPrice) {

        let result = budget - totalPrice;
        console.log(`You have ${result.toFixed(2)} leva left!`);

    } else {

        let result = (totalPrice - budget);
        console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`);
    }
}

solve(['900', '2', '1', '3']);
solve(['920.45', '3', '1', '1']);