function solve(input) {

    let index = 0;
    let destination = input[index];
    index++;
    let budget = Number(input[index]);
    index++;

    while (destination !== 'End') {

        while (budget > 0) {

            let countSum = Number(input[index]);
            budget -= countSum;
            index++;

            if (budget <= 0) {

                console.log(`Going to ${destination}!`);

                break;
            }
        }
        
        destination = input[index];
        index++;
        budget = Number(input[index]);
        index++;
    }
}

solve(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200",
    "300", "500", "193", "423", "End"]);
// solve(["France","2000","300","300","200","400","190","258","360","Portugal","1450",
// "400","400","200","300","300","Egypt","1900","1000","280","300","500","End"]);