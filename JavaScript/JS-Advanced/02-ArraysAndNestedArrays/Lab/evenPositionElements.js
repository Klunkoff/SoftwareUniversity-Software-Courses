function evenPositionElements(array) {
 
    let result = [];
 
    for (let i = 0; i < array.length; i += 2) {
 
        result.push(array[i]);
    }
 
    console.log(result.join(' '));
}
 
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);