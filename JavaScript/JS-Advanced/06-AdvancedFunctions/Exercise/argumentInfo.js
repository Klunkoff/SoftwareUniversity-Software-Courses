function argumentInfo(...parameters) {

    let counterObject = {};

    parameters.forEach((el) => {

        console.log(`${typeof el}: ${el}`);

        if (!counterObject.hasOwnProperty(typeof el)) {
            counterObject[typeof el] = 0;
        }

        counterObject[typeof el] += 1;
    });

    Object.entries(counterObject)
        .sort((a, b) => b[1] - a[1])
        .forEach((el) => {

            console.log(`${el[0]} = ${el[1]}`);
        });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });