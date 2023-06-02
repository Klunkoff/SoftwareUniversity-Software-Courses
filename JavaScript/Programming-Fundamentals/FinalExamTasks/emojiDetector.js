function emojiDetector(textArray) {
 
    let text = textArray[0];
    let patternDigits = /\d/g;
    let patternEmoji = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g;
    let coolThreshold = 1;
 
    let digitsArray = text.match(patternDigits);
    digitsArray.forEach(element => coolThreshold *= Number(element));
    let matchedEmojiArray = text.match(patternEmoji);
    let coolEmojiArray = [];
 
    let emoji = '';
 
    while ((emoji = patternEmoji.exec(text)) !== null) {
 
        let fullEmojiName = emoji[0];
        let currentEmojiText = emoji[2];
        let currentCoolnes = 0;
 
        for (let char of currentEmojiText) {
            let digit = char.charCodeAt(0);
            currentCoolnes += digit;
        }
 
        if (currentCoolnes >= coolThreshold) {
            coolEmojiArray.push(fullEmojiName);
        }
    }
 
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${matchedEmojiArray.length} emojis found in the text. The cool ones are:`);
    console.log(`${coolEmojiArray.join(`\n`)}`);
}
 
// emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);