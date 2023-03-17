function sortAnArrayBy2Criteria(arrayOfStrings) {
 
    let sortedArray = arrayOfStrings.slice().sort((a, b) => {
 
        let sortedByLength = a.length - b.length;
        let sortedByAlphaValue = a.localeCompare(b);
 
        return sortedByLength || sortedByAlphaValue;
    });
 
    console.log(sortedArray.join('\n'));
}
 
// sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);