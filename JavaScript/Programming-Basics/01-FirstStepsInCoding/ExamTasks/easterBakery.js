function solve(input) {

    let flourPrice = Number(input[0]);
    let flourKg = Number(input[1]);
    let shugarKg = Number(input[2]);
    let numberOfEggPackages = Number(input[3]);
    let leavenPackages = Number(input[4]);

    let totalFlour = flourKg * flourPrice;
    let totalShugar = shugarKg * (flourPrice - (flourPrice * 0.25));
    let shugarPrice = flourPrice - (flourPrice * 0.25);
    let totalEggs = numberOfEggPackages * (flourPrice + (flourPrice * 0.1));
    let totalLeaven = leavenPackages * (shugarPrice - (shugarPrice * 0.8));

    let total = totalFlour + totalShugar + totalEggs + totalLeaven;

    console.log(total.toFixed(2));

}

solve(["50", "10", "3.5", "6", "1"]);
solve(["63.44", "3.57", "6.35", "8", "2"]);