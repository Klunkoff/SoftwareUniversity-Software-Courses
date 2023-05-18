function vacation(peopleNum, groupType, day) {

    let price = 0;

    switch (groupType) {

        case 'Students':

            switch (day) {

                case 'Friday': price += peopleNum * 8.45; break;
                case 'Saturday': price += peopleNum * 9.80; break;
                case 'Sunday': price += peopleNum * 10.46; break;
            }

            break;

        case 'Business':

            switch (day) {

                case 'Friday': price += peopleNum * 10.90;

                    if (peopleNum >= 100) {

                        price -= (10 * 10.90);
                    }

                    break;

                case 'Saturday': price += peopleNum * 15.60;

                    if (peopleNum >= 100) {

                        price -= (10 * 15.60);
                    }

                    break;

                case 'Sunday': price += peopleNum * 16;

                    if (peopleNum >= 100) {

                        price -= (10 * 16);
                    }

                    break;
            }

            break;

        case 'Regular':

            switch (day) {

                case 'Friday': price += peopleNum * 15; break;
                case 'Saturday': price += peopleNum * 20; break;
                case 'Sunday': price += peopleNum * 22.50; break;
            }

            break;
    }

    if (groupType === 'Students' && peopleNum >= 30) {
        price *= 0.85;

    } else if (groupType === 'Regular' && peopleNum >= 10 && peopleNum <= 20) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

// vacation(30,"Students","Sunday");
vacation(40, "Regular", "Saturday");