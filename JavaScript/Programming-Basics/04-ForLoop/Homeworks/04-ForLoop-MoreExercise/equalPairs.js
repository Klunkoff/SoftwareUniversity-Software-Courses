function solve(input) {

    let index = 0;
    let number = Number(input[index]);
    index++;

    let sumA = 0;
    let sumB = 0;
    let sumC = 0;
    let maxDiff = 0;
    let isValueEqual = false;

    for (let i = 0; i < number; i++) {

        let numA = Number(input[index]);
        index++;
        let numB = Number(input[index]);
        index++;

        sumA = numA + numB;

        sumB = sumA;
        sumA = sumC;
        sumC = sumB;

        if (number <= 1) {
            isValueEqual = true;
            break;
        }

        if (sumA !== sumB && i >= 1) {
            maxDiff = Math.abs(sumA - sumB);
        }
    }

    if (isValueEqual) {
        console.log(`Yes, value=${sumB}`);
    } else if (maxDiff > 0) {
        console.log(`No, maxdiff=${maxDiff}`);
    } else {
        console.log(`Yes, value=${sumB}`);
    }
}

solve(['3', '1', '2', '0', '3', '4', '-1']);
// solve(['4', '1', '1', '3', '1', '2', '2', '0', '0']);
// solve(['2','-1','0','0','-1']);
// solve(['2','1','2','2','2']);
// solve(['1','5','5']);
// solve(['2','-1','2', '0', '-1']);