function biggestOf3Numbers(num1, num2, num3) {
 
    let array = [num1, num2, num3];
    let biggestNum = Number.MIN_SAFE_INTEGER;
 
    for (let i = 0; i < 3; i++) {
 
        let countNum = array[i];
 
        if (countNum > biggestNum) {
 
            biggestNum = countNum;
        }
    }
 
    console.log(biggestNum);
}
 
biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(2, 2, 2);