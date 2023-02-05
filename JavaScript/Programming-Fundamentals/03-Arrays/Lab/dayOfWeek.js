function dayOfWeek(number) {
 
    let arrayOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'];
 
    if (number > 7 || number < 1) {
 
        console.log(`Invalid day!`);
 
    } else {
 
        let result = arrayOfDays[number - 1];
        console.log(result);
    }
}
 
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);