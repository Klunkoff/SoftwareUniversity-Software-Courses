function solve(input) {

    let tennisRacquetPrice = input[0];
    let tennisRacquetNumber = input[1];
    let sneakersNumber = input[2];

    let sneakerPrice = tennisRacquetPrice / 6;
    let subTotal = (tennisRacquetNumber * tennisRacquetPrice) + (sneakersNumber * sneakerPrice);
    let additionalEquipment = subTotal * 0.2;
    let total = subTotal + additionalEquipment;

    let sumDjokovic = Math.floor(total / 8);
    let sumSponsors = Math.ceil((total * 7) / 8);

    console.log(`Price to be paid by Djokovic ${sumDjokovic}`);
    console.log(`Price to be paid by sponsors ${sumSponsors}`);
}

// solve([850, 4, 2]);
solve([386, 7, 4]);