function listOfNames(arrayOfNames) {
 
    let sortedNames = arrayOfNames.sort((a, b) => a.localeCompare(b));
 
    for (let i = 1; i <= sortedNames.length; i++) {
 
        let currentName = sortedNames[i - 1];
        console.log(`${i}.${currentName}`);
    }
}
 
listOfNames(["John", "Bob", "Christina", "Ema"]);