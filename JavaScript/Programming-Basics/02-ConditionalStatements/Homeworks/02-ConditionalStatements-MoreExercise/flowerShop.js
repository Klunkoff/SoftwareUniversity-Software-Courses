function solve(input) {
 
    let magnoliaNum = Number(input[0]);
    let hyacinthNUm = Number(input[1]);
    let rosesNum = Number(input[2]);
    let cactusNum = Number(input[3]);
    let giftPrice = Number(input[4]);
 
    let totalSum = (magnoliaNum * 3.25) + (hyacinthNUm * 4) + (rosesNum * 3.5) + (cactusNum * 8);
 
    let sumAfterFees = totalSum * 0.95;
 
    let result = Math.abs(sumAfterFees - giftPrice);
 
    if (sumAfterFees >= giftPrice) {
 
        console.log(`She is left with ${Math.floor(result)} leva.`);
 
    } else {
 
        console.log(`She will have to borrow ${Math.ceil(result)} leva.`);
    }
}
 
solve(['2', '3', '5', '1', '50']);
solve(['15', '7', '5', '10', '100']);