function circleArea(parameter) {

    if (typeof parameter !== 'number') {
        let typeOfParameter = typeof parameter;

        console.log(`We can not calculate the circle area, because we receive a ${typeOfParameter}.`);

    } else {
        let circleArea = Math.PI * Math.pow(parameter, 2);
                        //OR
        // let circleArea = Math.PI * (parameter ** 2);

        console.log(circleArea.toFixed(2));
    }
}

circleArea(5);
circleArea('name');