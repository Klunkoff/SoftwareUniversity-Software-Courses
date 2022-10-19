function solve(input) {

    let index = 0;

    let num = Number(input[index]);
    index++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < num; i++) {

        countNum = Number(input[index]);
        index++;

        if (countNum < 200) {
            p1++;
        } else if (countNum >= 200 && countNum < 400) {
            p2++;
        } else if (countNum >= 400 && countNum < 600) {
            p3++;
        } else if (countNum >= 600 && countNum < 800) {
            p4++;
        } else if (countNum >= 800) {
            p5++;
        }
    }

    let percentp1 = p1 / num * 100;
    let percentp2 = p2 / num * 100;
    let percentp3 = p3 / num * 100;
    let percentp4 = p4 / num * 100;
    let percentp5 = p5 / num * 100;

    console.log(`${percentp1.toFixed(2)}%`);
    console.log(`${percentp2.toFixed(2)}%`);
    console.log(`${percentp3.toFixed(2)}%`);
    console.log(`${percentp4.toFixed(2)}%`);
    console.log(`${percentp5.toFixed(2)}%`);
}

solve(["7", "800", "801", "250", "199", "399", "599", "799",]);