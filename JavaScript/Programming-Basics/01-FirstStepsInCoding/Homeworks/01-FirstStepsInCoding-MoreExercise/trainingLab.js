function solve(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);

    let lengthCM = length * 100;
    let widthCM = (width * 100) - 100;

    let lengthRows = Math.floor(lengthCM / 120);
    let widthBurreau = Math.floor(widthCM / 70);

    let result = (lengthRows * widthBurreau) - 3;

    console.log(result);

}

// solve(['15', '8.9']);
solve(['8.4', '5.2']);