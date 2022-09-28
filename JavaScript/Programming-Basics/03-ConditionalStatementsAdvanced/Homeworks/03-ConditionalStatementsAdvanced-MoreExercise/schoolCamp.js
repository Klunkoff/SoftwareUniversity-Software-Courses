function solve(input) {

    let season = input[0];
    let groupType = input[1];
    let studentNum = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = '';

    switch (season) {

        case 'Winter':

            switch (groupType) {

                case 'girls':
                case 'boys': price = (studentNum * nights) * 9.60; break;
                case 'mixed': price = (studentNum * nights) * 10; break;
            }

            switch (groupType) {

                case 'girls': sport = 'Gymnastics'; break;
                case 'boys': sport = 'Judo'; break;
                case 'mixed': sport = 'Ski'; break;
            }

            break;

        case 'Spring':

            switch (groupType) {

                case 'girls':
                case 'boys': price = (studentNum * nights) * 7.20; break;
                case 'mixed': price = (studentNum * nights) * 9.50; break;
            }

            switch (groupType) {

                case 'girls': sport = 'Athletics'; break;
                case 'boys': sport = 'Tennis'; break;
                case 'mixed': sport = 'Cycling'; break;
            }

            break;

        case 'Summer':

            switch (groupType) {

                case 'girls':
                case 'boys': price = (studentNum * nights) * 15; break;
                case 'mixed': price = (studentNum * nights) * 20; break;
            }

            switch (groupType) {

                case 'girls': sport = 'Volleyball'; break;
                case 'boys': sport = 'Football'; break;
                case 'mixed': sport = 'Swimming'; break;
            }

            break;
    }

    if (studentNum >= 10 && studentNum < 20) {
        price *= 0.95;
    } else if (studentNum >= 20 && studentNum < 50) {
        price *= 0.85;
    } else if (studentNum >= 50) {
        price *= 0.50;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

// solve(['Spring','girls','20','7']);
solve(['Winter', 'mixed', '9', '15']);
// solve(['Summer','boys','60','7']);