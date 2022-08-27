function solve(input) {

    let numberBitcoin = Number(input[0]);
    let NumberCNY = Number(input[1]);
    let commision = Number(input[2]);

    let bitcoinValue = (numberBitcoin * 1168) / 1.95; // eur
    let cnyValue = ((NumberCNY * 0.15) * 1.76) / 1.95 // eur

    let subtotal = bitcoinValue + cnyValue;

    let total = subtotal - (subtotal * (commision / 100));

    console.log(total.toFixed(2));

}

solve(['1', '5', '5']);
solve(['20', '5678', '2.4']);