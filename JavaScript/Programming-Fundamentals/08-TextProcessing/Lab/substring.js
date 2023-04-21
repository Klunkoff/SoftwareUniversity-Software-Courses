function substring(string, startingIndex, count) {

    let result = string.substring(startingIndex, (startingIndex + count));

    console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);