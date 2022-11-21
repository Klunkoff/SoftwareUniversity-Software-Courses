function solve(input) {

    let index = 0;
    let cakeA = Number(input[index]);
    index++;
    let cakeB = Number(input[index]);
    index++;

    let cake = cakeA * cakeB;
    let isCakeOver = false;

    let entryData = input[index];
    index++;

    while (entryData !== 'STOP') {

        entryData = Number(entryData);
        cake -= entryData;
        entryData = input[index];
        index++;

        if (cake > 0) {

            continue;

        } else {

            isCakeOver = true;
            break;
        }
    }

    let result = Math.abs(cake);

    if (isCakeOver === true) {
        console.log(`No more cake left! You need ${result} pieces more.`);
    } else {
        console.log(`${result} pieces are left.`);
    }
}

solve(["10", "10", "20", "20", "20", "20", "21"]);
solve(["10", "2", "2", "4", "6", "STOP"]);