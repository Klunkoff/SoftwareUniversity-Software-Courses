function buildAWall(array) {

    let ascendingArray = array.sort((a, b) => a - b).map(Number);
    let smallestWall = Number(ascendingArray.slice(0, 1));
    let wallHeight = 30;
    let dayToBuild = wallHeight - smallestWall;

    let usedConcreteArray = [];
    let allUsedConcrete = 0;

    for (let i = 0; i < dayToBuild; i++) {

        let currentArray = ascendingArray.filter((a) => a !== 30);
        ascendingArray = currentArray.map((a) => a += 1);

        let dailyUsedConcrete = 195 * ascendingArray.length;
        usedConcreteArray.push(dailyUsedConcrete);
        allUsedConcrete += dailyUsedConcrete;
    }

    let totalCostPesos = allUsedConcrete * 1900;

    console.log(usedConcreteArray.join(', '));
    console.log(`${totalCostPesos} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17, 22, 17, 19, 17]);
buildAWall([17]);