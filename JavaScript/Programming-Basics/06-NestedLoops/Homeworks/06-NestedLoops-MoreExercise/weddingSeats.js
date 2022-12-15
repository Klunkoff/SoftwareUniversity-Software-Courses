function solve(input) {
 
    let sectorChar = input[0];
    let rowNumber = Number(input[1]);
    let oddSeatsNumber = Number(input[2]);
 
    let endSectorIndex = sectorChar.charCodeAt(0);
    let startSectorIndex = 65;
    let counterSeats = 0;
 
    for (let i = startSectorIndex; i <= endSectorIndex; i++) {
 
        for (let j = 1; j <= rowNumber; j++) {
 
            let k = 97;
            let seatsNum = oddSeatsNumber;
            let endKIndex = k + seatsNum;
 
            if (j % 2 == 0) {
 
                endKIndex += 2;
            }
 
            for (k; k < endKIndex; k++) {
 
                let currentSectorChar = String.fromCharCode(i);
                let currentSeatChar = String.fromCharCode(k);
 
                console.log(currentSectorChar + j + currentSeatChar);
                counterSeats++;
            }
        }
 
        rowNumber++;
    }
 
    console.log(counterSeats);
}
 
// solve(['B', '3', '2']);
solve(['C', '4', '2']);