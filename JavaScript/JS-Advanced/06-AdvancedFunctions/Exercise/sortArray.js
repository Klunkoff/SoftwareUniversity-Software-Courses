function sortArray(digitArray, command) {

    let sortObject = {

        asc: () => digitArray.sort((a, b) => a - b),
        desc: () => digitArray.sort((a, b) => b - a),
    }

    let result = sortObject[command];
    return result();
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');