function counterStrike(arrayOfStrings) {
 
    let newArray = arrayOfStrings.slice();
    let energy = Number(newArray.shift());
    let battleWins = 0;
    let index = 0;
    let commands = newArray[index];
    index++;
 
    while (commands != 'End of battle') {
 
        let enemyDistance = Number(commands);
        
        if (energy < enemyDistance) {
            console.log(`Not enough energy! Game ends with ${battleWins} won battles and ${energy} energy`);
            
            return;
        }
        
        energy -= enemyDistance;
        battleWins++;
 
        if (battleWins % 3 == 0) {
            energy += battleWins;
        }
 
        commands = newArray[index];
        index++;
    }
 
    console.log(`Won battles: ${battleWins}. Energy left: ${energy}`);
}
 
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);