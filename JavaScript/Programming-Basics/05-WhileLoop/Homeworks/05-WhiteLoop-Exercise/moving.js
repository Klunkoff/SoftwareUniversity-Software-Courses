function solve(input) {

    let index = 0;
    let a = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
    let c = Number(input[index]);
    index++;

    let apartment = a * b * c;
    let isApartmentFull = false;

    let entryData = input[index];
    index++;

    while (entryData !== 'Done') {

        entryData = Number(entryData);
        apartment -= entryData;
        entryData = input[index];
        index++;

        if (apartment > 0) {

            continue;

        } else {

            isApartmentFull = true;

            break;
        }
    }

    let result = Math.abs(apartment);

    if (isApartmentFull === true) {
        console.log(`No more free space! You need ${result} Cubic meters more.`);
    } else {
        console.log(`${result} Cubic meters left.`);
    }
}

solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
solve(["10", "1", "2", "4", "6", "Done"]);