function matchAllWords(text) {
 
    let pattern = /\w+/g;
    let patternArray = text.match(pattern);
 
    console.log(patternArray.join('|'));
}
 
matchAllWords(`_ (Underscores) are also word characters!`);