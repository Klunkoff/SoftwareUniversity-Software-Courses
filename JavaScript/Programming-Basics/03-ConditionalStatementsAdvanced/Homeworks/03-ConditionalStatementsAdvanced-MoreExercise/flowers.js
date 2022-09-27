function solve(input) {

    let hrizantems = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let day = input[4];

    let price = 0;
    let allFlowers = hrizantems + roses + tulips;

    switch (day) {

        case 'N':

            switch (season) {

                case 'Spring':
                case 'Summer': price += hrizantems * 2; price += roses * 4.10;
                    price += tulips * 2.50; break;
                case 'Autumn':
                case 'Winter': price += hrizantems * 3.75; price += roses * 4.50;
                    price += tulips * 4.15; break;
            }

            break;

        case 'Y':

            switch (season) {

                case 'Spring':
                case 'Summer': price += hrizantems * (2 * 1.15); price += roses * (4.10 * 1.15);
                    price += tulips * (2.50 * 1.15); break;
                case 'Autumn':
                case 'Winter': price += hrizantems * (3.75 * 1.15); price += roses * (4.50 * 1.15);
                    price += tulips * (4.15 * 1.15); break;
            }

            break;
    }

    if (tulips > 7 && season === 'Spring') {
        price *= 0.95;
    }

    if (roses >= 10 && season === 'Winter') {
        price *= 0.90;
    }

    if (allFlowers > 20) {
        price *= 0.80;
    }

    price += 2;

    console.log(price.toFixed(2));
}

solve(['2', '4', '8', 'Spring', 'Y']);
// solve(['3','10','9','Winter','N']);
// solve(['10','10','10','Autumn','N']);