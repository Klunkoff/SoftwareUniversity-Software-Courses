function solve(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let detergentPrice = detergent * 1.20;

    let sum = (pensPrice + markersPrice + detergentPrice);
    let discountPercent = sum * (discount / 100);
    let overralSum = sum - discountPercent;

    console.log(overralSum);

}

solve(["2", '3', '4', '25']);
solve(["4", '2', '5', '13']);