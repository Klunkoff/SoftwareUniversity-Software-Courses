function solve(input) {

    let number = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= number; i++) {

        let countNum = Number(input[i]);

        if (i % 2 === 0) {

            evenSum += countNum;

            if (countNum > evenMax) {
                evenMax = countNum;
            }

            if (countNum < evenMin) {
                evenMin = countNum;
            }

        } else {

            oddSum += countNum;

            if (countNum > oddMax) {
                oddMax = countNum;
            }

            if (countNum < oddMin) {
                oddMin = countNum;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMin === Number.MAX_SAFE_INTEGER && oddMax === Number.MIN_SAFE_INTEGER) {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMin === Number.MAX_SAFE_INTEGER && evenMax === Number.MIN_SAFE_INTEGER) {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

// solve(['6', '2', '3', '5', '4', '2', '1']);
// solve(['5', '3', '-2', '8', '11', '-3']);
// solve(['4', '1.5', '1.75', '1.5', '1.75']);
// solve(['1', '-5']);
solve(['0']);