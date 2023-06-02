function heroesOfCodeAndLogicVII(gameArray) {
 
    let heroesNumber = Number(gameArray.shift());
    let heroesObject = {};
    let maxHP = 100;
    let maxMP = 200;
 
    for (let i = 0; i < heroesNumber; i++) {
 
        let [hero, hitPoints, manaPoints] = gameArray.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        heroesObject[hero] = {
 
            hitPoints: hitPoints,
            manaPoints: manaPoints,
        };
    }
 
    let command = gameArray.shift();
 
    while (command !== 'End') {
 
        let commandArray = command.split(' - ');
        let currentCommand = commandArray[0];
        let currentHeroName = commandArray[1];
 
        switch (currentCommand) {
 
            case 'CastSpell':
 
                let neededMP = Number(commandArray[2]);
                let spellName = commandArray[3];
 
                if (heroesObject[currentHeroName].manaPoints < neededMP) {
                    console.log(`${currentHeroName} does not have enough MP to cast ${spellName}!`);
 
                } else {
                    heroesObject[currentHeroName].manaPoints -= neededMP;
                    console.log(`${currentHeroName} has successfully cast ${spellName} and now has ${heroesObject[currentHeroName].manaPoints} MP!`);
                }
 
                break;
 
            case 'TakeDamage':
 
                let damage = Number(commandArray[2]);
                let attackerName = commandArray[3];
                heroesObject[currentHeroName].hitPoints -= damage;
 
                if (heroesObject[currentHeroName].hitPoints > 0) {
                    console.log(`${currentHeroName} was hit for ${damage} HP by ${attackerName} and now has ${heroesObject[currentHeroName].hitPoints} HP left!`);
 
                } else {
                    delete heroesObject[currentHeroName];
                    console.log(`${currentHeroName} has been killed by ${attackerName}!`);
                }
 
                break;
 
            case 'Recharge':
 
                let rechargeMP = Number(commandArray[2]);
                let currentMP = heroesObject[currentHeroName].manaPoints;
                let updatedMP = 0;
 
                if ((currentMP + rechargeMP) > maxMP) {
                    updatedMP = maxMP - heroesObject[currentHeroName].manaPoints;
                    heroesObject[currentHeroName].manaPoints = maxMP;
 
                } else {
                    updatedMP = rechargeMP;
                    heroesObject[currentHeroName].manaPoints += updatedMP;
                }
 
                console.log(`${currentHeroName} recharged for ${updatedMP} MP!`);
 
                break;
 
            case 'Heal':
 
                let healHP = Number(commandArray[2]);
                let currentHP = heroesObject[currentHeroName].hitPoints;
                let updatedHP = 0;
 
                if ((currentHP + healHP) > maxHP) {
                    updatedHP = maxHP - heroesObject[currentHeroName].hitPoints;
                    heroesObject[currentHeroName].hitPoints = maxHP;
 
                } else {
                    updatedHP = healHP;
                    heroesObject[currentHeroName].hitPoints += updatedHP;
                }
 
                console.log(`${currentHeroName} healed for ${updatedHP} HP!`);
 
                break;
        }
 
        command = gameArray.shift();
    }
 
    let heroesKeys = Object.keys(heroesObject);
 
    for (let key of heroesKeys) {
        console.log(key);
        console.log(`  HP: ${heroesObject[key].hitPoints}`);
        console.log(`  MP: ${heroesObject[key].manaPoints}`);
    }
}
 
// heroesOfCodeAndLogicVII(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End']);
heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);