function matchFullName2(textOfNames) {
 
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
 
    let validNames = pattern.exec(textOfNames);
    let validNames2 = pattern.exec(textOfNames);
    let validNames3 = pattern.exec(textOfNames);
    let validNames4 = pattern.exec(textOfNames);
 
    console.log(validNames);
    console.log(validNames2);
    console.log(validNames3);
    console.log(validNames4);
}
 
matchFullName2('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov');