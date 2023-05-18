function guineaPig(dataArray) {
 
    let foodInGR = Number(dataArray[0]) * 1000;
    let hayInGR = Number(dataArray[1]) * 1000;
    let coverInGR = Number(dataArray[2]) * 1000;
    let pigWeightInGR = Number(dataArray[3]) * 1000;
 
    let isGoodsEnough = true;
 
    for (let i = 1; i <= 30; i++) {
 
        foodInGR -= 300;
 
        if (i % 2 == 0) {
            hayInGR -= (foodInGR * 0.05);
        }
 
        if (i % 3 == 0) {
            coverInGR -= (pigWeightInGR / 3);
        }
 
        if (foodInGR <= 0 || hayInGR <= 0 || coverInGR <= 0) {
            console.log(`Merry must go to the pet store!`);
            isGoodsEnough = false;
 
            break;
        }
    }
 
    if (isGoodsEnough) {
        let foodInKG = foodInGR / 1000;
        let hayInKG = hayInGR / 1000;
        let coverInKG = coverInGR / 1000;
 
        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKG.toFixed(2)}, Hay: ${hayInKG.toFixed(2)}, Cover: ${coverInKG.toFixed(2)}.`);
    }
}
 
// guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9","5","5.2","1"]);