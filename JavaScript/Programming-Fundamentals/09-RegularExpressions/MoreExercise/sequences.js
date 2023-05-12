function sequences(input) {

    let numArrs = input.map(JSON.parse);
    let uniqueArrs = new Set();

    for (const numArr of numArrs) {

        let sortedNumArr = numArr.slice().sort((a, b) => a - b);
        uniqueArrs.add(JSON.stringify(sortedNumArr));
    }

    let sortedArrs = Array.from(uniqueArrs, JSON.parse).sort((a, b) => {

        if (a.length === b.length) {
            return numArrs.indexOf(JSON.stringify(a)) - numArrs.indexOf(JSON.stringify(b));
        }

        return a.length - b.length;
    });

    for (const numArr of sortedArrs) {

        let result = numArr.sort((a, b) => b - a);
        console.log(`[${result.join(', ')}]`);
    }
}

sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);