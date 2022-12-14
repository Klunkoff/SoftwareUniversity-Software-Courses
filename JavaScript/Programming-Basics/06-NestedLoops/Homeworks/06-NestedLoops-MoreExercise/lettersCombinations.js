function solve(input) {

    let startChar = input[0];
    let endChar = input[1];
    let checkedChar = input[2];

    let result = [];

    let startCharIndex = startChar.charCodeAt(0);
    let endCharIndex = endChar.charCodeAt(0);
    let checkedCharIndex = checkedChar.charCodeAt(0);

    for (let i = startCharIndex; i <= endCharIndex; i++) {

        for (let j = startCharIndex; j <= endCharIndex; j++) {

            for (let k = startCharIndex; k <= endCharIndex; k++) {

                if (i !== checkedCharIndex && j !== checkedCharIndex && k !== checkedCharIndex) {

                    let firstChar = String.fromCharCode(i);
                    let secondChar = String.fromCharCode(j);
                    let thirdChar = String.fromCharCode(k);
                    result.push(firstChar + secondChar + thirdChar);
                }
            }
        }
    }

    console.log(`${result.join(' ')} ${result.length}`);
}

// solve(['a','c','b']);
// solve(['f','k','h']);
solve(['a', 'c', 'z']);