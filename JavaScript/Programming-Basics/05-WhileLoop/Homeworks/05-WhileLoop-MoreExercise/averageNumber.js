function solve(input){

    let index = 0;

    let num = Number(input[index]);
    index++;

    let average = 0;

    for (let i = 1; i <= num; i++){

        let countNum = Number(input[index]);
        index++;

        average += countNum;
    }

    let result = average / num;

    console.log(result.toFixed(2));
}

solve(["4", '3', '2', "4", "2"]);