function sortAnArrayBy2Criteria(stringArray) {
 
    let sortedArray = stringArray.sort((a, b) => {
 
        return a.length - b.length || a.localeCompare(b);
    });
 
    sortedArray.forEach(element => console.log(element));
}
 
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']);
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']);