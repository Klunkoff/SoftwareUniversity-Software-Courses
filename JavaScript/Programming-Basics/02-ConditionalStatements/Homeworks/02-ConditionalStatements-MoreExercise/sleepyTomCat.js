function solve(input) {
 
    let holidays = input[0];
 
    let catTargetPerYearInMinutes = 30000;
 
    let holidaysInMinutes = holidays * 127;
    let workingDaysInMinutes = (365 - holidays) * 63;
    let overallDaysInMinutes = holidaysInMinutes + workingDaysInMinutes;
 
    let differenceInMinutes = Math.abs(overallDaysInMinutes - catTargetPerYearInMinutes);
 
    let hours = Math.trunc(differenceInMinutes / 60);
    let minutes = differenceInMinutes % 60;
 
    if (overallDaysInMinutes > catTargetPerYearInMinutes) {
 
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
 
    } else {
 
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
 
solve([20]);
// solve([113]);