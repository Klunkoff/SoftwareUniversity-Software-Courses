function solve(input) {

    let index = 0;
    let people = Number(input[index]);
    index++;

    let backPeople = 0;
    let chestPeople = 0;
    let legsPeople = 0;
    let absPeople = 0;
    let shakePeople = 0;
    let barPeople = 0;
    let allTrainers = 0;
    let allProteinByers = 0;

    for (let i = 1; i <= people; i++) {

        let countPeople = input[index];
        index++;

        switch (countPeople) {

            case 'Back': backPeople++; allTrainers++; break;
            case 'Chest': chestPeople++; allTrainers++; break;
            case 'Legs': legsPeople++; allTrainers++; break;
            case 'Abs': absPeople++; allTrainers++; break;
            case 'Protein shake': shakePeople++; allProteinByers++; break;
            case 'Protein bar': barPeople++; allProteinByers++; break;
        }
    }

    let percentTrainers = allTrainers / people * 100;
    let percentProteinByers = allProteinByers / people * 100;

    console.log(`${backPeople} - back`);
    console.log(`${chestPeople} - chest`);
    console.log(`${legsPeople} - legs`);
    console.log(`${absPeople} - abs`);
    console.log(`${shakePeople} - protein shake`);
    console.log(`${barPeople} - protein bar`);
    console.log(`${percentTrainers.toFixed(2)}% - work out`);
    console.log(`${percentProteinByers.toFixed(2)}% - protein`);
}

// solve(["10","Back","Chest","Legs","Abs","Protein shake","Protein bar",
// "Protein shake","Protein bar","Legs","Abs"]);
solve(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);