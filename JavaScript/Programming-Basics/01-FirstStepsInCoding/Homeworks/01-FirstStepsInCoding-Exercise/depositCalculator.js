function solve(input) {

    let depositSum = Number(input[0]);
    let periodOfDepositInMonths = Number(input[1]);
    let gpr = Number(input[2]);

    let gprPercent = gpr / 100;

    let gprLihva = gprPercent * depositSum;
    let gprForMonth = gprLihva / 12;

    let result = depositSum + periodOfDepositInMonths * gprForMonth;
    console.log(result);
}

solve(["2350", "6", "7"]);
solve(["10000", "36", "2.5"]);