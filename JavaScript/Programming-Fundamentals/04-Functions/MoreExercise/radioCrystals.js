function radioCrystals(crystalArray) {
 
    let desiredThickness = crystalArray.shift();
 
    for (let crystal of crystalArray) {
 
        let isFinished = false;
        let counter = 0;
 
        console.log(`Processing chunk ${crystal} microns`);
 
        while (crystal >= desiredThickness) {
 
            if ((crystal / 4) >= desiredThickness) {
                crystal /= 4;
                counter++;
 
            } else if (crystal == desiredThickness) {

                console.log(`Cut x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                console.log(`Finished crystal ${crystal} microns`);
                isFinished = true;
 
                break;
 
            } else if ((crystal / 4) < desiredThickness) {
 
                if (counter == 0) {
                    break;
                }
 
                console.log(`Cut x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                counter = 0;
 
                break;
            }
        }
 
        while (crystal >= desiredThickness) {
 
            if (isFinished) {
                break;
            }
 
            if ((crystal * 0.8) >= desiredThickness) {
                crystal *= 0.8;
                counter++;
 
            } else if (crystal == desiredThickness && !isFinished) {
 
                console.log(`Lap x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                console.log(`Finished crystal ${crystal} microns`);
                isFinished = true;
 
                break;
 
            } else if ((crystal * 0.8) < desiredThickness) {
 
                if (counter == 0) {
                    break;
                }
 
                console.log(`Lap x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                counter = 0;
 
                break;
            }
        }
 
        while (crystal >= desiredThickness) {
 
            if (isFinished) {
                break;
            }
 
            if ((crystal - 20) >= desiredThickness) {
 
                crystal -= 20;
                counter++;
 
            } else if (crystal == desiredThickness) {
 
                console.log(`Grind x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                console.log(`Finished crystal ${crystal} microns`);
                isFinished = true;
 
                break;
 
            } else if ((crystal - 20) < desiredThickness) {
 
                if (counter == 0) {
                    break;
                }
 
                console.log(`Grind x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                counter = 0;
 
                break;
            }
        }
 
        while (crystal >= desiredThickness || crystal <= desiredThickness) {
 
            if (isFinished) {
                break;
            }
 
            if (crystal > desiredThickness) {
                crystal -= 2;
                counter++;
 
            } else if (crystal == desiredThickness) {
 
                console.log(`Etch x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                console.log(`Finished crystal ${crystal} microns`);
                isFinished = true;
 
                break;
 
            } else if ((crystal - 2) < desiredThickness) {
 
                if (counter == 0) {
                    break;
                }
 
                console.log(`Etch x${counter}`);
                console.log(`Transporting and washing`);
                crystal = Math.floor(crystal);
                counter = 0;
 
                break;
            }
        }
 
        if (crystal < desiredThickness) {
 
            crystal += 1;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${crystal} microns`);
        }
    }
}
 
radioCrystals([1375, 1376]);
// radioCrystals([1000, 1000, 8100]);