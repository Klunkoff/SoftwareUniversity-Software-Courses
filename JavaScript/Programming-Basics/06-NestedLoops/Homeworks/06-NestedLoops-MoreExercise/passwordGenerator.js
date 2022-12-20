function solve(inputData) {
 
    let n = Number(inputData[0]);
    let L = Number(inputData[1]);
 
    let charStartIndex = 97;
    let charEndIndex = charStartIndex + L;
    let result = [];
 
    for (let i = 1; i < n; i++) {
 
        for (let j = 1; j < n; j++) {
 
            for (let k = charStartIndex; k < charEndIndex; k++) {
 
                for (let z = charStartIndex; z < charEndIndex; z++) {
 
                    for (let x = i + 1; x <= n; x++) {
 
                        if (x > j) {
 
                            let firstChar = String.fromCharCode(k);
                            let secondChar = String.fromCharCode(z);
                            let currentPassword = `${i}${j}${firstChar}${secondChar}${x}`;
 
                            result.push(currentPassword);
                        }
                    }
                }
            }
        }
    }
 
    console.log(result.join(' '));
}
 
// solve(['2', '4']);
solve(['3', '1']);
// solve(['3', '2']);
// solve(['4', '2']);