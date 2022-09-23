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

    if (flowerType === 'Roses') {

        if (numberFlowers <= 80) {
            sum = numberFlowers * rose;
            overall = sum;
        } else if (numberFlowers > 80) {
            sum = numberFlowers * rose;
            overall = sum - (sum * 0.1);
        }
    }

    if (flowerType === 'Dahlias') {

        if (numberFlowers <= 90) {
            sum = numberFlowers * dalia;
            overall = sum;
        } else if (numberFlowers > 90) {
            sum = numberFlowers * dalia;
            overall = sum - (sum * 0.15);
        }
    }

    if (flowerType === 'Tulips') {

        if (numberFlowers <= 80) {
            sum = numberFlowers * tulip;
            overall = sum;
        } else if (numberFlowers > 80) {
            sum = numberFlowers * tulip;
            overall = sum - (sum * 0.15);
        }
    }

    if (flowerType === 'Narcissus') {

        if (numberFlowers >= 120) {
            sum = numberFlowers * narcis;
            overall = sum;
        } else if (numberFlowers < 120) {
            sum = numberFlowers * narcis;
            overall = sum + (sum * 0.15);
        }
    }

    if (flowerType === 'Gladiolus') {

        if (numberFlowers >= 80) {
            sum = numberFlowers * gladiola;
            overall = sum;
        } else if (numberFlowers < 80) {
            sum = numberFlowers * gladiola;
            overall = sum + (sum * 0.20);
        }
    }

    if (overall <= budget) {
        let result = budget - overall;
        console.log(`Hey, you have a great garden with ${numberFlowers} ${flowerType} and ${result.toFixed(2)} leva left.`);
    } else {
        let result = overall - budget;
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
    }
}

solve(['Narcissus', '119', '360']);