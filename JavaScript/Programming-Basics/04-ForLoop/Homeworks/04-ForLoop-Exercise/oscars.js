function solve(input) {

    let actorName = input[0];
    let academyScore = Number(input[1]);
    let academyPeopleNum = Number(input[2]);

    let result = 0;
    let overalScore = academyScore;
    let index = 3;

    for (let i = 1; i <= academyPeopleNum; i++) {

        let nameLength = input[index];
        index++;
        let nameScore = Number(input[index]);
        index++;

        result = nameLength.length * nameScore / 2;
        overalScore += result;

        if (overalScore > 1250.5) {

            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(overalScore).toFixed(1)}!`);

            break;
        }
    }

    if (overalScore < 1250.5) {

        let difference = 1250.5 - overalScore;

        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }
}

// solve(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29",
// "Jet Lee","10","Matthew Mcconaughey","39"]);
solve(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5",
    "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

