function aggregateElements(arrayOfNumbers) {

    sum(arrayOfNumbers);
    inverseSum(arrayOfNumbers);
    concat(arrayOfNumbers);

    function sum(array) {

        let result = 0;
        array.forEach(a => result += a);
        console.log(result);
    }

    function inverseSum(array) {

        let result = 0;
        array.forEach(a => result += (1/a));
        console.log(result);
    }

    function concat(array) {

        let result = '';
        array.forEach(a => result += a);
        console.log(result);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);