function solve(input) {

    let annualFee = Number(input[0]);

    let basketballShoes = annualFee - (annualFee * (40 / 100));
    let basketballOutfit = basketballShoes - (basketballShoes * (20 / 100));
    let ball = basketballOutfit / 4;
    let baskeballAccessories = ball / 5;

    let overallSum = annualFee + basketballShoes + basketballOutfit + ball + baskeballAccessories;

    console.log(overallSum);

}

solve(["365"]);
solve(["550"]);