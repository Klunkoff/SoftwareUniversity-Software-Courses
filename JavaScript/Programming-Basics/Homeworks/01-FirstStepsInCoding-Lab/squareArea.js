function solve(squareArea) {
    
    let result = squareArea * squareArea;

    console.log(result);
    console.log('Rounded UP: ' + Math.ceil(result));
    console.log('Rounded DOWN: ' + Math.floor(result));
    console.log('Fixed to .00: ' + result.toFixed(2));
}

solve(5);