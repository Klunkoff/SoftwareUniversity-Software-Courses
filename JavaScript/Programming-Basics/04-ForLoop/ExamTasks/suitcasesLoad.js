function solve(input) {

    let index = 0;
    let trunk = Number(input[index]);
    index++;
    let entryData = input[index];
    index++;

    let suitcaseNumber = 0;
    let isTrunkFull = false;
    let countBaggage = 0;

    while (entryData !== 'End') {

        let suitcaseCounter = Number(entryData);
        ++countBaggage;

        if (countBaggage % 3 === 0) {
            suitcaseCounter += suitcaseCounter * 0.1;
        }

        trunk -= suitcaseCounter;

        if (trunk < 0) {
            isTrunkFull = true;

            break;
        }

        suitcaseNumber++;
        entryData = input[index];
        index++;
    }

    if (isTrunkFull) {
        console.log(`No more space!`);
    } else {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${suitcaseNumber} suitcases loaded.`);
}

// solve(["550","100","252","72","End"]);
// solve(["700.5","180","340.6","126","220"]);
solve(["1200.2", "260", "380.5", "125.6", "305", "End"]);