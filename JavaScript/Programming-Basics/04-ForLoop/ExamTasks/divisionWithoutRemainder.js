function solve(input) {

    let index = 0;
    let numbers = Number(input[index]);
    index++;

    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    for (let i = 1; i <= numbers; i++) {

        let countNum = Number(input[index]);
        index++;

        if (countNum % 2 === 0) {
            num2++;
        }

        if (countNum % 3 === 0) {
            num3++;
        }

        if (countNum % 4 === 0) {
            num4++;
        }
    }

    let p2 = num2 / numbers * 100;
    let p3 = num3 / numbers * 100;
    let p4 = num4 / numbers * 100;

    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
}

solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
// solve(["3","3","6","9"]);