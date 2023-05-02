function matchFullName2(textOfNames) {
 
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    let validName = pattern.exec(textOfNames);
    let validNamesArray = [];
 
    while (validName !== null) {
 
        validNamesArray.push(validName[0]);
        validName = pattern.exec(textOfNames);
    }
 
    console.log(validNamesArray.join(' '));
}
 
matchFullName2('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov');