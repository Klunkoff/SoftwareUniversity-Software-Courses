function inventory(arrayOfStrings) {
 
    let arrayOfObjectHeroes = [];
 
    for (let string of arrayOfStrings) {
 
        let currentHeroArray = string.split(' / ');
        let heroName = currentHeroArray[0];
        let heroLevel = Number(currentHeroArray[1]);
        let heroItems = currentHeroArray[2];
        arrayOfObjectHeroes.push({hero: heroName, level: heroLevel, items: heroItems});
    }
 
    let sortedHeroArrayOfObjects = arrayOfObjectHeroes.sort((a, b) => a.level - b.level);
 
    printHeroes(sortedHeroArrayOfObjects);
 
    function printHeroes(arrayOfHeroes) {
 
        for (let hero of arrayOfHeroes) {
 
            console.log(`Hero: ${hero.hero}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        }
    }
}
 
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);