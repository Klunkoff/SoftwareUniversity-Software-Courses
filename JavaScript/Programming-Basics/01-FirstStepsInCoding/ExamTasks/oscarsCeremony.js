function solve(input) {

    let hallRent = Number(input[0]);

    let figurine = hallRent - (hallRent * 0.3);
    let catering = figurine - (figurine * 0.15);
    let sound = catering / 2;

    let total = hallRent + figurine + catering + sound;

    console.log(total.toFixed(2));

}

solve(['3500']);
solve(['5555']);