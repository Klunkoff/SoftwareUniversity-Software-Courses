function solve(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let veganMenuPrice = veganMenu * 8.15;

    let desert = (chickenMenuPrice + fishMenuPrice + veganMenuPrice) * (20 / 100);

    let sum = chickenMenuPrice + fishMenuPrice + veganMenuPrice + desert + 2.50;

    console.log('цена на поръчката');
    console.log(sum);

}

solve(['2', '4', '3']);
solve(['9', '2', '6']);