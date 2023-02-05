function reverseInPlace(array) {

    for (let i = 0; i < array.length / 2; i++) {

        let j = array.length - 1 - i;
        let k = array[i];
        array[i] = array[j];
        array[j] = k;

    }

    console.log(array.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);