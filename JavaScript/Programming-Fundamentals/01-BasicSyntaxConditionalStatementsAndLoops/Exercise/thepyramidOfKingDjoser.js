function thePyrdamidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let floorCount = 0;

    for (let i = base; i >= 1; i -= 2) {

        let baseFloor = i * i;
        floorCount++;

        if (i < 3) {
            gold = baseFloor * increment;
            break;
        }

        let stoneCount = (i - 2) * (i - 2);
        stone += stoneCount * increment;

        if (floorCount % 5 === 0) {
            lapisLazuli += (baseFloor - stoneCount) * increment;

        } else {
            marble += (baseFloor - stoneCount) * increment;
        }
    }

    let height = Math.floor(floorCount * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}

// thePyrdamidOfKingDjoser(11, 1);
// thePyrdamidOfKingDjoser(11, 0.75);
thePyrdamidOfKingDjoser(12, 1);
// thePyrdamidOfKingDjoser(23, 0.5);