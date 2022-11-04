function solve(input) {

    let index = 0;
    let bakes = Number(input[index]);
    index++;

    let sugar = 0;
    let flour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= bakes; i++) {

        let sugarCount = Number(input[index]);
        index++;
        sugar += sugarCount;

        let flourCount = Number(input[index]);
        index++;
        flour += flourCount;

        if (sugarCount > maxSugar) {
            maxSugar = sugarCount;
        }

        if (flourCount > maxFlour) {
            maxFlour = flourCount;
        }
    }

    let sugarPacks = Math.ceil(sugar / 950);
    let flourPacks = Math.ceil(flour / 750);

    console.log(`Sugar: ${sugarPacks}`);
    console.log(`Flour: ${flourPacks}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

// solve(["3","400","350","250","300","450","380"]);
solve(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);