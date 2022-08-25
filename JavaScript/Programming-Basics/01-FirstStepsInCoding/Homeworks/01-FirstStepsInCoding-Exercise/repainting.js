function solve(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let masterHours = Number(input[3]);

    let amountOfNylon = nylon + 2; // look at nylonPrice
    let amountOfPaint = (paint * (10 / 100) + paint); // look at paintPrice

    let nylonPrice = amountOfNylon * 1.50;
    let paintPrice = amountOfPaint * 14.50;
    let paintThinnerPrice = paintThinner * 5;
    let bags = 0.40;

    let subtotal = nylonPrice + paintPrice + paintThinnerPrice + bags;
    let masterPercent30 = subtotal * (30 / 100); // 30% for all materials
    let masterHourOveralWork = masterHours * masterPercent30;
    let total = subtotal + masterHourOveralWork;

    console.log(total);

}

solve(['10', '11', '4', '8']);
solve(['5', '10', '10', '1']);