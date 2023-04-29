function melrahShake(inputArray) {

    let melrahString = inputArray.shift();
    let pattern = inputArray.shift();

    while (pattern.length > 0) {

        let firstPartIndex = melrahString.indexOf(pattern);
        let secondPartIndex = melrahString.lastIndexOf(pattern);

        if ((firstPartIndex > -1 && secondPartIndex > -1) && (firstPartIndex !== secondPartIndex)) {

            let firstPartString = melrahString.substring(0,firstPartIndex);
            let secondPartString = melrahString.substring(firstPartIndex + pattern.length, secondPartIndex);
            let thirdPartString = melrahString.substring(secondPartIndex + pattern.length)

            melrahString = firstPartString + secondPartString + thirdPartString;

            let firstPartPattern = pattern.substring(0, Math.floor(pattern.length / 2));
            let secondPartPattern = pattern.substring(Math.floor(pattern.length / 2) + 1);
            pattern = firstPartPattern + secondPartPattern;

            console.log(`Shaked it.`);

        } else {
            
            break;
        }
    }

    console.log(`No shake.`);
    console.log(melrahString);
}

melrahShake(['astalavista baby',
    'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']);