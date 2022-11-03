function solve(input) {

    let index = 0;
    let eggsNum = Number(input[index]);
    index++;

    let eggsRed = 0;
    let eggsOrange = 0;
    let eggsBlue = 0;
    let eggsGreen = 0;

    let colorRed = "";
    let colorOrange = "";
    let colorBlue = "";
    let colorGreen = "";

    for (let i = 1; i <= eggsNum; i++) {

        let colorCount = input[index];
        index++;

        switch (colorCount) {

            case 'red': eggsRed++; colorRed = colorCount; break;
            case 'orange': eggsOrange++; colorOrange = colorCount; break;
            case 'blue': eggsBlue++; colorBlue = colorCount; break;
            case 'green': eggsGreen++; colorGreen = colorCount; break;
        }
    }

    console.log(`Red eggs: ${eggsRed}`);
    console.log(`Orange eggs: ${eggsOrange}`);
    console.log(`Blue eggs: ${eggsBlue}`);
    console.log(`Green eggs: ${eggsGreen}`);

    if (eggsRed > eggsOrange && eggsRed > eggsBlue && eggsRed > eggsGreen) {

        console.log(`Max eggs: ${eggsRed} -> ${colorRed}`);

    } else if (eggsOrange > eggsRed && eggsOrange > eggsBlue && eggsOrange > eggsGreen) {

        console.log(`Max eggs: ${eggsOrange} -> ${colorOrange}`);

    } else if (eggsBlue > eggsRed && eggsBlue > eggsOrange && eggsBlue > eggsGreen) {

        console.log(`Max eggs: ${eggsBlue} -> ${colorBlue}`);

    } else {

        console.log(`Max eggs: ${eggsGreen} -> ${colorGreen}`);
    }
}

// solve(["7","orange","blue","green","green","blue","red","green"]);
solve(["4", "blue", "red", "blue", "orange"]);
