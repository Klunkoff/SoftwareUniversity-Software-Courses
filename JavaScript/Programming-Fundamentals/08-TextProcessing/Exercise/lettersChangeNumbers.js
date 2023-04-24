function lettersChangeNumbers(dataString) {

    let spacePattern = /\s+/;
    let stringPattern = /(?<startChar>[A-Za-z])(?<digit>\d+)(?<endChar>[A-Za-z])/;

    let dataArray = dataString.split(spacePattern);
    let totalSum = 0;

    let lowerCharObject = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };
    let upperCharObject = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11,
        L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20,
        U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };

    for (let data of dataArray) {

        if (data == '') {
            continue;
        }

        let currentData = stringPattern.exec(data);
        let startChar = currentData.groups['startChar'];
        let startCharIndex = startChar.charCodeAt();
        let endChar = currentData.groups['endChar'];
        let endCharIndex = endChar.charCodeAt();
        let digit = Number(currentData.groups['digit']);

        let currentSum = 0;

        isUpperStartChar = startCharIndex >= 65 && startCharIndex <= 90;
        isUpperEndChar = endCharIndex >= 65 && endCharIndex <= 90;

        if (isUpperStartChar) {
            let divider = upperCharObject[startChar];
            currentSum += digit / divider;

        } else {
            let multiplier = lowerCharObject[startChar];
            currentSum += digit * multiplier;
        }

        if (isUpperEndChar) {
            let subtractor = upperCharObject[endChar];
            currentSum -= subtractor;

        } else {
            let adder = lowerCharObject[endChar];
            currentSum += adder;
        }

        currentData = stringPattern.exec(data);

        totalSum += currentSum;
    }

    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('  a1A  ');