function evenPositionElements2(array) {
 
    let evenElements = array.filter((a, i) => i % 2 == 0);
 
    console.log(evenElements.join(' '));
}
 
evenPositionElements2(['20', '30', '40', '50', '60']);
evenPositionElements2(['5', '10']);