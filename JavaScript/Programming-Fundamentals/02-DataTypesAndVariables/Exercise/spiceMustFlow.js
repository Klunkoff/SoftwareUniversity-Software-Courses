function spiceMustFlow(startingYeld) {
 
    let spiceArea = startingYeld;
    let days = 0;
    let totalAmountOfSpice = 0;
 
    for (let spice = spiceArea; spice >= 100; spice -= 10) {
 
        totalAmountOfSpice += spice - 26;
        days++;
    }
 
    totalAmountOfSpice -= 26;
 
    if (totalAmountOfSpice < 0) {
 
        totalAmountOfSpice = 0;
    }
 
    console.log(days);
    console.log(totalAmountOfSpice);
}
 
spiceMustFlow(111);
// spiceMustFlow(450);