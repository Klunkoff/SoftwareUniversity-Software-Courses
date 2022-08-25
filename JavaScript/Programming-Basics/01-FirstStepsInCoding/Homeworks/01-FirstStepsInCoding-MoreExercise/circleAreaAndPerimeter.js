function solve(input) {

    let r = Number(input[0]);

    let area = Math.PI * Math.pow(r, 2);

    let perimeter = (Math.PI * r) * 2;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}

// solve([3]);
solve([4.5]);