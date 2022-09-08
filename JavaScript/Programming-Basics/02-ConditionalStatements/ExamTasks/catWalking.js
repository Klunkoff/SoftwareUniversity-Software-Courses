function solve(input){

    let minutesWalk = Number(input[0]);
    let numberWalks = Number(input[1]);
    let callories = Number(input[2]);

    let totalMinutes = numberWalks * minutesWalk;

    let burningCallories = (totalMinutes * 5);
    let goalCallories = callories / 2;

    if (burningCallories >= goalCallories){

        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burningCallories}.`);
        
    }else{

        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burningCallories}.`);
    }

}

solve(['30', '3', '600']);
solve(['15', '2', '500']);