function sumOfNumbersNtoM(stringN, stringM) {
 
    let numberN = Number(stringN);
    let numberM = Number(stringM);
 
    let result = 0;
 
    for (let i = numberN; i <= numberM; i++) {
        result += i;
    }
 
    return result;
}
 
console.log(sumOfNumbersNtoM('1', '5'));
console.log(sumOfNumbersNtoM('-8', '20'));