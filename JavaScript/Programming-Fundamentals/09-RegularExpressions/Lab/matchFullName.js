function matchFullName(textOfNames) {
 
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    let validNamesArray = textOfNames.match(pattern);
 
    console.log(validNamesArray.join(' '));
}
 
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov');