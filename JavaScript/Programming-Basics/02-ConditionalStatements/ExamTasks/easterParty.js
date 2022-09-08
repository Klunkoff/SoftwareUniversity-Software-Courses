function solve(input){

    let guestsNumber = Number(input[0]);
    let entryPrice = Number(input[1]);
    let budget = Number(input[2]);

    let totalEntry = guestsNumber * entryPrice;

    if (guestsNumber < 10){

        totalEntry = totalEntry;

    }else if (guestsNumber >= 10, guestsNumber <= 15){

        totalEntry = totalEntry - (totalEntry * 0.15);

    }else if (guestsNumber > 15, guestsNumber <= 20){

        totalEntry = totalEntry - (totalEntry * 0.20);

    }else if (guestsNumber > 20){

        totalEntry = totalEntry - (totalEntry * 0.25);
    }

    let cake = budget * 0.1;

    let total = totalEntry + cake;

    if (budget >= total){

        let result = budget - total;
        console.log(`It is party time! ${result.toFixed(2)} leva left.`);
    }else{

        let result = total - budget;
        console.log(`No party! ${result.toFixed(2)} leva needed.`);
    }

}

solve(["18","30","450"]);
solve(["8","25","340"]);
solve(["24","35","550"]);