function solve(input) {

    let numberOfPagesInOneBook = Number(input[0]);
    let readingPagesForOneHour = Number(input[1]);
    let daysForReadingOneBook = Number(input[2]);

    let numberOfHoursForReadingOneBook = numberOfPagesInOneBook / readingPagesForOneHour;
    let numberOfHoursForReadingOneBookPerDay = numberOfHoursForReadingOneBook / daysForReadingOneBook;

    console.log(numberOfHoursForReadingOneBookPerDay);

}

solve(["212", "20", "2"]);
solve(["432", "15", "4"]);