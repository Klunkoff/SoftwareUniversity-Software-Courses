function solve(input) {

    let index = 0;
    let groupNum = Number(input[0]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let allPeople = 0;

    for (i = 0; i < groupNum; i++) {

        let countGroup = Number(input[index]);
        index++;
        allPeople += countGroup;

        if (countGroup <= 5) {
            musala += countGroup;
        } else if (countGroup <= 12) {
            monblan += countGroup;
        } else if (countGroup <= 25) {
            kilimandjaro += countGroup;
        } else if (countGroup <= 40) {
            k2 += countGroup;
        } else {
            everest += countGroup;
        }
    }

    let musalaPercent = (musala / allPeople) * 100;
    let monblanPercent = (monblan / allPeople) * 100;
    let kilimandjaroPercent = (kilimandjaro / allPeople) * 100;
    let k2Percent = (k2 / allPeople) * 100;
    let everestPercent = (everest / allPeople) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}