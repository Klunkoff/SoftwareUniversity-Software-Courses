function dayOfWeek(day) {
 
    let dayObject = {
 
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    };
 
    if (dayObject.hasOwnProperty(day)) {
        return dayObject[day];
 
    } else {
        return 'error';
    }
}
 
console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Friday'));
console.log(dayOfWeek('Invalid'));