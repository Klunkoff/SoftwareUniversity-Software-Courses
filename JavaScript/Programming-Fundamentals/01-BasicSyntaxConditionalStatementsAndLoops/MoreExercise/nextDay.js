function nextDay(year, month, day) {

    let newDate = new Date(year, month - 1, day + 1);

    let newDay = newDate.getDate();
    let newMonth = newDate.getMonth() + 1;
    let newYear = newDate.getFullYear();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);