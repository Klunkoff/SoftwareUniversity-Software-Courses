function solve(input) {

    let movieName = input[0];
    let dayCount = Number(input[1]);
    let ticketNumber = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let income = (dayCount * ticketNumber) * ticketPrice;
    let incomeAfterCinemaPercent = income - (income * (cinemaPercent / 100));

    console.log(`The profit from the movie ${movieName} is ${incomeAfterCinemaPercent.toFixed(2)} lv.`);

}

solve(["The Programmer", "20", "500", "7.50", "7"]);
solve(["Python Basics", "40", "34785", "10.45", "14"]);
solve(["The Jungle", "22", "20500", "9.37", "30"]);