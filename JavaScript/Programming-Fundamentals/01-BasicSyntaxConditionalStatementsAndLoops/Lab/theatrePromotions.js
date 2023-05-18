function solve(typeDay, age) {

    let ticketPrice = 0;

    if (age >= 0 && age <= 18) {

        switch (typeDay) {

            case 'Weekday': ticketPrice = 12; break;
            case 'Weekend': ticketPrice = 15; break;
            case 'Holiday': ticketPrice = 5; break;
        }

        console.log(`${ticketPrice}$`);

    } else if (age > 18 && age <= 64) {

        switch (typeDay) {

            case 'Weekday': ticketPrice = 18; break;
            case 'Weekend': ticketPrice = 20; break;
            case 'Holiday': ticketPrice = 12; break;
        }

        console.log(`${ticketPrice}$`);

    } else if (age > 64 && age <= 122) {

        switch (typeDay) {

            case 'Weekday': ticketPrice = 12; break;
            case 'Weekend': ticketPrice = 15; break;
            case 'Holiday': ticketPrice = 10; break;
        }

        console.log(`${ticketPrice}$`);

    } else {

        console.log(`Error!`);
    }
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);