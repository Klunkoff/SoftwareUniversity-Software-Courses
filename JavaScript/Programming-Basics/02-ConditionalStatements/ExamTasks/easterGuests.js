function solve(input){

    let guestNumber = Number(input[0]);
    let budget = Number(input[1]);

    let breadQuantity = Math.ceil(guestNumber / 3);
    let eggsQuantity = guestNumber * 2;

    let breadsPrice = breadQuantity * 4;
    let eggsPrice = eggsQuantity * 0.45;

    let total = breadsPrice + eggsPrice;

    if (budget >= total){

        let result = budget - total;
        console.log(`Lyubo bought ${breadQuantity} Easter bread and ${eggsQuantity} eggs.`);
        console.log(`He has ${result.toFixed(2)} lv. left.`);

    }else{
        
        let result = total - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${result.toFixed(2)} lv. more.`);

    }

}

solve(['10', '35']);
solve(['9', '12']);