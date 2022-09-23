function solve(input) {

    let flowerType = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;
    let overall = 0;

    let rose = 5;
    let dalia = 3.80;
    let tulip = 2.80;
    let narcis = 3;
    let gladiola = 2.50;

    switch (flowerType) {

        case 'Roses':

            if (numberFlowers <= 80) {
                sum = numberFlowers * rose;
                overall = sum;
            } else if (numberFlowers > 80) {
                sum = numberFlowers * rose;
                overall = sum - (sum * 0.1);
            }

            break;

        case 'Dahlias':

            if (numberFlowers <= 90) {
                sum = numberFlowers * dalia;
                overall = sum;
            } else if (numberFlowers > 90) {
                sum = numberFlowers * dalia;
                overall = sum - (sum * 0.15);
            }

            break;

        case 'Tulips':

            if (numberFlowers <= 80) {
                sum = numberFlowers * tulip;
                overall = sum;
            } else if (numberFlowers > 80) {
                sum = numberFlowers * tulip;
                overall = sum - (sum * 0.15);
            }

            break;

        case 'Narcissus':

            if (numberFlowers >= 120) {
                sum = numberFlowers * narcis;
                overall = sum;
            } else if (numberFlowers < 120) {
                sum = numberFlowers * narcis;
                overall = sum + (sum * 0.15);
            }

            break;

        case 'Gladiolus':

            if (numberFlowers >= 80) {
                sum = numberFlowers * gladiola;
                overall = sum;
            } else if (numberFlowers < 80) {
                sum = numberFlowers * gladiola;
                overall = sum + (sum * 0.20);
            }

            break;
    }

    if (overall <= budget) {
        let result = budget - overall;
        console.log(`Hey, you have a great garden with ${numberFlowers} ${flowerType} and ${result.toFixed(2)} leva left.`);
    } else {
        let result = overall - budget;
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
    }
}

solve(['Gladiolus', '79', '360']);