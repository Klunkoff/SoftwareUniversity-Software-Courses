function tripletsOfLatinLetters(number) {
 
    let countNumber = Number(number);
    let triplet = '';
 
    for (let z = 0; z < countNumber; z++) {
 
        triplet += String.fromCharCode(97 + z);
    }
 
    for (let i = 0; i < countNumber; i++) {
 
        let countTripletI = triplet[i];
 
        for (let j = 0; j < countNumber; j++) {
 
            let countTripletJ = triplet[j];
 
            for (let k = 0; k < countNumber; k++) {
 
                let countTripletK = triplet[k];
 
                console.log(`${countTripletI}${countTripletJ}${countTripletK}`);
            }
        }
    }
}
 
// tripletsOfLatinLetters('3');
tripletsOfLatinLetters('2');