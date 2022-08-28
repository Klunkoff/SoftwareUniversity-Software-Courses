function solve(input) {

    let numberOfPeople = Number(input[0]);
    let entryTax = Number(input[1]);
    let oneSunChairTax = Number(input[2]);
    let oneUmbrellaTax = Number(input[3]);

    let totalPeopleEntryTax = numberOfPeople * entryTax;
    let totalUmbrellaTax = Math.ceil(numberOfPeople / 2) * oneUmbrellaTax;
    let totalSunChairTax = Math.ceil(numberOfPeople * 0.75) * oneSunChairTax;

    let total = totalPeopleEntryTax + totalUmbrellaTax + totalSunChairTax;

    console.log(`${total.toFixed(2)} lv.`);

}

solve(['21', '5.50', '4.40', '6.20']);
solve(['50', '6', '8', '4']);