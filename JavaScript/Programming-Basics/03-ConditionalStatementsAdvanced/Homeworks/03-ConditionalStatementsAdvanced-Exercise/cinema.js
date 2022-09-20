function solve(input) {

    let typeProjection = input[0];
    let chairA = Number(input[1]);
    let chairB = Number(input[2]);

    let overalchairs = chairA * chairB;
    let result = 0;

    switch (typeProjection) {

        case 'Premiere':
            result = overalchairs * 12;
            console.log(`${result.toFixed(2)} leva`); break;

        case 'Normal':
            result = overalchairs * 7.50;
            console.log(`${result.toFixed(2)} leva`); break;

        case 'Discount':
            result = overalchairs * 5.00;
            console.log(`${result.toFixed(2)} leva`); break;
    }
}

solve(['Premiere', '10', '12']);
solve(['Normal', '21', '13']);
solve(['Discount', '12', '30']);