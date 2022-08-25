function solve(input) {

    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonitoKG = Number(input[2]);
    let safridKG = Number(input[3]);
    let clamKG = Number(input[4]);

    let bonitoPrice = (mackerelPrice * 1.60) * bonitoKG;
    let safridPrice = (sprinklePrice * 1.80) * safridKG;
    let clamPrice = clamKG * 7.50;

    let result = bonitoPrice + safridPrice + clamPrice;

    console.log(result.toFixed(2));

}

// solve(['6.90','4.20','1.5','2.5','1']);
solve(['5.55', '3.57', '4.3', '3.6', '7']);