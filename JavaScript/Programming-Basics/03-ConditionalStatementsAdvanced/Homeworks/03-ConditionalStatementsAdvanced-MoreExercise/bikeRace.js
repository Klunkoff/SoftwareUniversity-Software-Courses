function solve(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trace = input[2];

    let sum = 0;
    let allBikers = juniors + seniors;

    switch (trace) {

        case 'trail': sum += juniors * 5.50; sum += seniors * 7; break;
        case 'cross-country': sum += juniors * 8; sum += seniors * 9.50; break;
        case 'downhill': sum += juniors * 12.25; sum += seniors * 13.75; break;
        case 'road': sum += juniors * 20; sum += seniors * 21.50; break;
    }

    if (trace === 'cross-country' && allBikers >= 50) {

        sum *= 0.75;
    }

    sum *= 0.95;

    console.log(sum.toFixed(2));
}

// solve(['10','20', 'trail']);
// solve(['21','26', 'cross-country']);
solve(['30', '25', 'cross-country']);
// solve(['10','10', 'downhill']);