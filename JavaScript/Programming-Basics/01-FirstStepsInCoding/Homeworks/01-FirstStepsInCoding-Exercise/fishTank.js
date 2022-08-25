function solve(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let cubicCentimeters = length * width * height;
    let cubicDecimeters = cubicCentimeters / 1000;
    let litters = cubicDecimeters - (cubicDecimeters * (percent / 100));

    console.log(litters);
}

solve(['85', '75', '47', '17']);
solve(['105', '77', '89', '18.5']);