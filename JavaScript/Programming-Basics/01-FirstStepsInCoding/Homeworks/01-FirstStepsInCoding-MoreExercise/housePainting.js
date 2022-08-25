function solve(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontWalls = ((x * x) * 2) - (1.2 * 2);
    let sideWalls = ((x * y) * 2) - ((1.5 * 1.5) * 2);
    let greenPaint = (frontWalls + sideWalls) / 3.4;

    let sideRoof = (x * y) * 2;
    let frontRoof = (x * h / 2) * 2;
    let redPaint = (sideRoof + frontRoof) / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}

// solve(['6','10','5.2']);
solve(['10.25', '15.45', '8.88']);