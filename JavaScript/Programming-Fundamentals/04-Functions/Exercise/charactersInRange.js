function charactersInRange(firstChar, secondChar) {
 
    let startingChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let finishingChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
 
    let array = [];
 
    for (let i = startingChar + 1; i < finishingChar; i++) {
 
        let countChar = String.fromCharCode(i);
        array.push(countChar);
    }
 
    console.log(array.join(' '));
}
 
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');