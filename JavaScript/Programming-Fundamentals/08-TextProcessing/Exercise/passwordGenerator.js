function passwordGenerator(wordArray) {
 
    let firstString = wordArray.shift();
    let secondString = wordArray.shift();
    let wordToUpperCase = wordArray.shift().toUpperCase();
    let concatString = firstString.concat(secondString);
 
    let pattern = /[aeiou]/;
 
    let indexCounter = 0;
 
    for (let char of concatString) {
 
        if (pattern.test(char)) {
            concatString = concatString.replace(char, wordToUpperCase[indexCounter]);
            indexCounter++;
 
            if (indexCounter == wordToUpperCase.length) {
                indexCounter = 0;
            }
        }
    }
 
    let password = concatString
        .split('')
        .reverse()
        .join('');
 
    console.log(`Your generated password is ${password}`);
}
 
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);