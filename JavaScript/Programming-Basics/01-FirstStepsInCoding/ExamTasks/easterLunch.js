function solve(input) {

    let numberOfEasterBreads = Number(input[0]);
    let numberOfEggPackages = Number(input[1]);
    let coockies = Number(input[2]);

    let easterBreadsPrice = numberOfEasterBreads * 3.20;
    let coockiesPrice = coockies * 5.40;
    let eggsPrice = numberOfEggPackages * 4.35;
    let eggPaintPrice = (numberOfEggPackages * 12) * 0.15;

    let total = easterBreadsPrice + coockiesPrice + eggsPrice + eggPaintPrice;

    console.log(total.toFixed(2));

}

solve(['3', '2', '3']);
solve(['4', '4', '3']);