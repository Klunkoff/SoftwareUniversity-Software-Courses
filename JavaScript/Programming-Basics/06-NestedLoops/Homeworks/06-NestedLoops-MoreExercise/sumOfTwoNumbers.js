function solve(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinations = 0;
    let isFindMagicNum = false;

    for (let i = firstNum; i <= secondNum; i++) {

        for (let j = firstNum; j <= secondNum; j++) {

            combinations++;
            let result = i + j;

            if (result === magicNum) {

                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                isFindMagicNum = true;

                break;
            }
        }

        if (isFindMagicNum) {

            break;
        }
    }

    if (!isFindMagicNum) {

        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
}