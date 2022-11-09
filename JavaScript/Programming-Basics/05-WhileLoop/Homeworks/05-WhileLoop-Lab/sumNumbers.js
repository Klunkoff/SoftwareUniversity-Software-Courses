function solve(input) {

    index = 0;
    let number = Number(input[index]);
    index++;
    let sum = 0;

    while (number > sum) {

        let countNum = Number(input[index]);
        sum += countNum;
        index++;
    }

    console.log(sum);
}

solve(["100", "10", "20", "30", "40"]);
solve(["20", "1", "2", "3", "4", "5", "6"]);