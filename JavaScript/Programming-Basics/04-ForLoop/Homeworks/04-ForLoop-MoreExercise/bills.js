function solve(input) {

    let index = 0;
    let months = Number(input[index]);
    index++;

    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    for (let i = 1; i <= months; i++) {

        let countElectricity = Number(input[index]);
        index++;

        electricity += countElectricity;
        water += 20;
        internet += 15;

        let otherSum = countElectricity + 20 + 15;
        other += otherSum + (otherSum * 0.2);
    }

    let average = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

// solve(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
solve(['8', '123.54', '231.54', '140.23', '100', '122.4', '430', '178.52', '64.2']);