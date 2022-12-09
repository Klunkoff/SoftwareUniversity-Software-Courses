function solve(input) {

    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let entryData = input[index];
    index++;

    while (entryData !== 'stop') {

        let countNum = Number(entryData);
        let isNonPrime = false;

        if (countNum < 0) {

            console.log(`Number is negative.`);

            entryData = input[index];
            index++;

            continue;
        }

        for (let i = 2; i < countNum; i++) {

            if (countNum % i === 0) {

                sumNonPrime += countNum;
                isNonPrime = true;

                break;
            }
        }

        if (!isNonPrime) {

            sumPrime += countNum;
        }

        entryData = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

// solve(["3","9","0","7","19","4","stop"]);
// solve(["30","83","33","-1","20","stop"]);
solve(["0", "-9", "0", "stop"]);