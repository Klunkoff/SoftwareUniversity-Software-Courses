function solve(input) {

    let index = 0;
    let entryData = input[index];
    let total = 0;

    while (entryData !== 'NoMoreMoney') {

        entryData = input[index];

        if (entryData > 0) {

            entryData = Number(input[index]);
            console.log(`Increase: ${entryData.toFixed(2)}`);
            total += entryData;

        } else {

            console.log(`Invalid operation!`);

            break;
        }
        
        index++;
        entryData = input[index];
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

// solve(["5.51", "69.42","100","NoMoreMoney"]);
solve(["120", "45.55", "-150"]);
