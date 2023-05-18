function blackFlag(inputData) {

    let days = Number(inputData[0]);
    let dailyPlunder = Number(inputData[1]);
    let target = Number(inputData[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {

        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += (dailyPlunder / 2);
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }

    if (totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
        
    } else {
        let plunderPercentage = (totalPlunder / target) * 100;
        console.log(`Collected only ${plunderPercentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);