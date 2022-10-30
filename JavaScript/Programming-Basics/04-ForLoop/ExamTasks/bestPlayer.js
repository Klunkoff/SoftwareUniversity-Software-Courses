function solve(input) {

    let index = 0;
    let entryData = input[index];

    let bestPlayer = "";
    let mostGoals = 0;

    while (entryData !== 'END') {

        let countName = String(entryData);
        index++;
        entryData = input[index];
        let countGoals = Number(entryData);
        index++;

        if (countGoals > mostGoals) {
            bestPlayer = countName;
            mostGoals = countGoals;
        }

        if (countGoals >= 10) {
            break;
        }

        entryData = input[index];
    }

    console.log(`${bestPlayer} is the best player!`);

    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

// solve(["Neymar", "2","Ronaldo","1","Messi","3","END"]);
solve(["Silva", "5", "Harry Kane", "10"]);
// solve(["Rooney","1","Junior","2","Paolinio","2","END"]);
// solve(["Petrov","2","Drogba","11"]);
// solve(["Zidane","1","Felipe","2","Johnson","4","END"]);