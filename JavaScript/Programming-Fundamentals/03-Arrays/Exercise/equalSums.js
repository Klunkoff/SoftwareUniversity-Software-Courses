function equalSums(array) {

    let isEqual = false;
    let index = 0;

    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }

        for (let r = i + 1; r < array.length; r++) {
            rightSum += array[r];
        }

        if (leftSum === rightSum) {

            isEqual = true;
            index = i;
            break;
        }
    }

    if (isEqual) {
        console.log(index);

    } else {
        console.log(`no`);
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
// equalSums([0, 0, 0, 0]);
// equalSums([25, 10, 5, 5, 10, 6, 10]);
// equalSums([10, 5, 5, 55, 10, 10]);