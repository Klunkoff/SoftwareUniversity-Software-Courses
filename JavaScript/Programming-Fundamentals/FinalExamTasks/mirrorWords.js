function mirrorWords(wordsArray) {
 
    let text = wordsArray.shift();
    let pattern = /([@|#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let matchedPairsArray = text.match(pattern);
    let mirrorPairsArray = [];
 
    if (!matchedPairsArray) {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
 
        return;
 
    } else {
        console.log(`${matchedPairsArray.length} word pairs found!`);
    }
 
    for (let pairWords of matchedPairsArray) {
 
        let currentPair = pattern.exec(pairWords);
        let currentFirstWord = currentPair.groups['firstWord'];
        let currentSecondWord = currentPair.groups['secondWord'];
        let reversedWord = currentSecondWord.split('').reverse().join('');
 
        if (currentFirstWord === reversedWord) {
            mirrorPairsArray.push(currentFirstWord + ' <=> ' + currentSecondWord);
        }
 
        currentPair = pattern.exec(pairWords);
    }
 
    if (mirrorPairsArray.length == 0) {
        console.log(`No mirror words!`);
 
    } else {
        console.log(`The mirror words are:`);
        console.log(`${mirrorPairsArray.join(', ')}`);
    }
}
 
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);