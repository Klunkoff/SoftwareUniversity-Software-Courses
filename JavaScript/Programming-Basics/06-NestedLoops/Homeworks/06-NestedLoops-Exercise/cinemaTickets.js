function solve(input) {

    let index = 0;
    let entryData = input[index];
    index++;

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0
    let kidsTickets = 0;

    while (entryData !== 'Finish') {

        let movieName = entryData;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++
        let ticketCount = 0;

        while (ticketType !== 'End') {

            switch (ticketType) {

                case 'student': studentTickets++; break;
                case 'standard': standardTickets++; break;
                case 'kid': kidsTickets++; break;
            }

            totalTickets++;
            ticketCount++;

            if (ticketCount === freeSeats) {

                break;
            }

            ticketType = input[index];
            index++;
        }

        let percentHallFill = (ticketCount / freeSeats) * 100;

        console.log(`${movieName} - ${percentHallFill.toFixed(2)}% full.`);

        entryData = input[index];
        index++;
    }

    let percentStudentTickets = (studentTickets / totalTickets) * 100;
    let percentStandardTickets = (standardTickets / totalTickets) * 100;
    let percentKidsTickets = (kidsTickets / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);
}

// solve(["Taxi","10","standard","kid","student","student","standard","standard","End",
// "Scary Movie","6","student","student","student","student","student","student","Finish"]);
solve(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard",
    "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard",
    "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);