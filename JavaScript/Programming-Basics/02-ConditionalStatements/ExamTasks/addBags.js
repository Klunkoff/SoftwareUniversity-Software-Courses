function solve(input){

    let baggagePriceOver20kg = Number(input[0]);
    let baggageKG = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let baggageNumber = Number(input[3]);

    let totalPrice = 0;
    let totalPrice2 = 0;

    if (baggageKG < 10){

        totalPrice = baggagePriceOver20kg * 0.2;

    } else if (baggageKG >= 10 && baggageKG <= 20){

        totalPrice = baggagePriceOver20kg * 0.5;

    } else {

        totalPrice = baggagePriceOver20kg;
    }


    if (daysToTrip > 30){

        totalPrice2 = totalPrice + (totalPrice * 0.1);

    } else if (daysToTrip <=30 && daysToTrip >=7){

        totalPrice2 = totalPrice + (totalPrice * 0.15);

    }else if (daysToTrip < 7){

        totalPrice2 = totalPrice + (totalPrice * 0.40);
    }

    let result = totalPrice2 * baggageNumber;

    console.log(`The total price of bags is: ${result.toFixed(2)} lv.`);
        
}

solve(['30', '18', '15', '2']);
solve(['25.50', '5', '36', '6']);
solve(['63.80', '23', '3', '1']);