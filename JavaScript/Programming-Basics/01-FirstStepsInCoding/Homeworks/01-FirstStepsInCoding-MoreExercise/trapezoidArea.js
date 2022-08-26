function solve(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let result = (a + b) * c / 2;

    console.log(result.toFixed(2));

}

solve(['8', '13', '7']);