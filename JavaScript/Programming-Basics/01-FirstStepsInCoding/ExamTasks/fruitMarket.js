function solve(input) {

    let strawberryPrice = (input[0]);
    let bananaQuantity = (input[1]);
    let orangeQuantity = (input[2]);
    let raspberryQuantity = (input[3]);
    let strawberryQuantity = (input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananaPrice = raspberryPrice - (raspberryPrice * 0.8);

    let total = (strawberryQuantity * strawberryPrice) + (bananaQuantity * bananaPrice) +
        (orangeQuantity * orangePrice) + (raspberryQuantity * raspberryPrice);

    console.log(total.toFixed(2));

}

solve(['48', '10', '3.3', '6.5', '1.7']);
solve([63.5, 3.57, 6.35, 8.15, 2.5]);