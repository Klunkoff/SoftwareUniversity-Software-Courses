function solve(input) {

    let wallHeight = Number(input[0]);
    let wallLength = Number(input[1]);
    let percent = Number(input[2]);

    let allWallArea = ((wallHeight * wallLength) * 4);
    let wallAreaForPaint = allWallArea - (allWallArea * (percent / 100));

    for (i = 3; i < input.length; i++) {

        let countWallLitters = input[i];

        if (countWallLitters === 'Tired!') {

            console.log(`${Math.ceil(wallAreaForPaint)} quadratic m left.`);

            break;
        }

        wallAreaForPaint -= countWallLitters;

        if (wallAreaForPaint === 0) {

            console.log(`All walls are painted! Great job, Pesho!`);

        } else if (wallAreaForPaint < 0) {

            console.log(`All walls are painted and you have ${Math.abs(wallAreaForPaint)} l paint left!`);
        }
    }
}

solve(["3", "5", "10", "2", "3", "4", "Tired!"]);
//solve(["2","3","25","6","7","8"]);