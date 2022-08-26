function solve(input) {

    let priceVegetable = Number(input[0]);
    let priceFruit = Number(input[1]);

    let weightVegetable = Number(input[2]);
    let weightFruit = Number(input[3]);

    let sum = ((priceVegetable * weightVegetable) + (priceFruit * weightFruit)) / 1.94;

    console.log(sum.toFixed(2));

}

// solve(['0.194','19.4','10','10']);
solve(['1.5', '2.5', '10', '10']);