function solve(input){

    let rentHall = Number(input[0]);

    let cake = rentHall * 0.2;
    let drinks = cake - (cake * 0.45);
    let animator = rentHall / 3;

    let total = rentHall + cake + drinks + animator;

    console.log(total);

}

solve(['2250']);
solve(['3720']);