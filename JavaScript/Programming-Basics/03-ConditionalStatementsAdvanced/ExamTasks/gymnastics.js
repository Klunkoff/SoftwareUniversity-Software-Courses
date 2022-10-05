function solve(input) {

    let country = input[0];
    let instrument = input[1];

    let result = 0;

    if (instrument === 'ribbon') {

        switch (country) {

            case 'Russia': result = 9.1 + 9.4; break;
            case 'Bulgaria': result = 9.6 + 9.4; break;
            case 'Italy': result = 9.2 + 9.5; break;
        }

    } else if (instrument === 'hoop') {

        switch (country) {

            case 'Russia': result = 9.3 + 9.8; break;
            case 'Bulgaria': result = 9.55 + 9.75; break;
            case 'Italy': result = 9.45 + 9.35; break;
        }

    } else if (instrument === 'rope') {

        switch (country) {

            case 'Russia': result = 9.6 + 9.0; break;
            case 'Bulgaria': result = 9.5 + 9.4; break;
            case 'Italy': result = 9.7 + 9.15; break;
        }
    }

    let percentage = 20 - result;
    percentage = (percentage / 20) * 100;

    console.log(`The team of ${country} get ${result.toFixed(3)} on ${instrument}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

solve(['Bulgaria', 'ribbon']);
solve(['Russia', 'rope']);
solve(['Italy', 'hoop']);