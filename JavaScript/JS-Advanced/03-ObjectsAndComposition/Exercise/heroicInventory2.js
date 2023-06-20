function heroicInventory(heroesArray) {
 
    let resultArray = [];
 
    for (let hero of heroesArray) {
 
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        let itemsArray = [];
 
        if (items) {
            itemsArray = items.split(', ');
        }
 
        resultArray.push({name, level, items: itemsArray});
    }
 
    let resultJSON = JSON.stringify(resultArray);
 
    console.log(resultJSON);
}
 
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Isacc / 25']);