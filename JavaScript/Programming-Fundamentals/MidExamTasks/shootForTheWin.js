function shootForTheWin(stringArray) {

    let newStringArray = stringArray.slice();
    let shootingArray = newStringArray.shift().split(' ').map(Number);

    let index = 0;
    let commands = newStringArray[index];
    index++;

    while (commands != 'End') {

        let shotIndex = Number(commands);

        if (shotIndex >= 0 && shotIndex < shootingArray.length) {

            let target = Number(shootingArray.splice(shotIndex, 1, -1));
            let mappedArray = shootingArray.map((a, b) => {

                a = target;
                let x = shootingArray[b];

                if (x < 0) {
                    return -1;

                } else if (x >= 0) {

                    if (x > a) {
                        x -= a;
                        return x;

                    } else if (x <= a) {
                        x += a;
                        return x;
                    }
                }
            });

            shootingArray = mappedArray;
        }

        commands = newStringArray[index];
        index++;
    }

    let targetsDawnArray = shootingArray.filter((a) => a == -1);
    let targetsDawn = targetsDawnArray.length;

    console.log(`Shot targets: ${targetsDawn} -> ${shootingArray.join(' ')}`);
}

// shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);