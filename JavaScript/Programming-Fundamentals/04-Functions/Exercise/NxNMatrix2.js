function NxNMatrix(number) {
 
    let row = '';
 
    for (let i = 0; i < number; i++) {
        row += number + ' ';
    }
 
    for (let j = 0; j < number; j++) {
        console.log(row);
    }
}

NxNMatrix(3);
// NxNMatrix(7);
// NxNMatrix(2);