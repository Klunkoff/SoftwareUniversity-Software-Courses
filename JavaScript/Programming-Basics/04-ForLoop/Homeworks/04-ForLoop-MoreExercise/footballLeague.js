function solve(input) {

    let index = 0;
    let stadiumCapacity = Number(input[index]);
    index++;

    let allFans = Number(input[index]);
    index++;

    let fansA = 0;
    let fansB = 0;
    let fansV = 0;
    let fansG = 0;

    for (let i = 1; i <= allFans; i++) {

        let countSector = input[index];
        index++;

        switch (countSector) {

            case 'A': fansA++; break;
            case 'B': fansB++; break;
            case 'V': fansV++; break;
            case 'G': fansG++; break;
        }
    }

    let percentFansA = (fansA / allFans) * 100;
    let percentFansB = (fansB / allFans) * 100;
    let percentFansV = (fansV / allFans) * 100;
    let percentFansG = (fansG / allFans) * 100;
    let percentAllfans = (allFans / stadiumCapacity) * 100;

    console.log(`${percentFansA.toFixed(2)}%`);
    console.log(`${percentFansB.toFixed(2)}%`);
    console.log(`${percentFansV.toFixed(2)}%`);
    console.log(`${percentFansG.toFixed(2)}%`);
    console.log(`${percentAllfans.toFixed(2)}%`);
}

solve(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);