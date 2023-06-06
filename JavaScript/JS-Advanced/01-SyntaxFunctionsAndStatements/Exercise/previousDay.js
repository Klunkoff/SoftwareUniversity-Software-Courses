function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);

    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDay = date.getDate();

    console.log(`${newYear}-${newMonth + 1}-${newDay}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);