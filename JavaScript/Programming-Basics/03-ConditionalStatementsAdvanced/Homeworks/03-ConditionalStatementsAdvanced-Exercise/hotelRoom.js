function solve(input) {

    let month = input[0];
    let nightsNumber = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {

        case 'May':
        case 'October':

            apartmentPrice = 65;
            studioPrice = 50;

            if (nightsNumber > 7 && nightsNumber <= 14) {
                studioPrice = studioPrice - (studioPrice * 0.05);
            } else if (nightsNumber > 14) {
                studioPrice = studioPrice - (studioPrice * 0.30);
                apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
            }

            break;

        case 'June':
        case 'September':

            apartmentPrice = 68.70;
            studioPrice = 75.20;

            if (nightsNumber > 14) {
                studioPrice = studioPrice - (studioPrice * 0.20);
                apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
            }

            break;

        case 'July':
        case 'August':

            apartmentPrice = 77;
            studioPrice = 76;

            if (nightsNumber > 14) {
                apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
            }

            break;
    }

    let resultApartment = nightsNumber * apartmentPrice;
    let resultStudio = nightsNumber * studioPrice;

    console.log(`Apartment: ${resultApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${resultStudio.toFixed(2)} lv.`);
}

solve(['August', '20']);