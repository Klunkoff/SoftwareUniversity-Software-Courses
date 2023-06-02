function heroesOfCodeAndLogicVII(gameArray) {

    let heroesNumber = Number(gameArray.shift());
    let maxHP = 100;
    let maxMP = 200;
    let heroesObject = {};

    let gameOperationObject = {

        CastSpell,
        TakeDamage,
        Recharge,
        Heal,
    };

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
        let firstParameter = commandArray[2];
        let secondParameter = commandArray[3];

        gameOperationObject[currentCommand](currentHeroName, firstParameter, secondParameter);

        command = gameArray.shift();
    }

    let heroesKeys = Object.keys(heroesObject);

    for (let key of heroesKeys) {
        console.log(key);
        console.log(`  HP: ${heroesObject[key].hitPoints}`);
        console.log(`  MP: ${heroesObject[key].manaPoints}`);
    }

    function CastSpell(heroName, neededMP, spellName) {

        neededMP = Number(neededMP);

        if (heroesObject[heroName].manaPoints < neededMP) {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);

        } else {
            heroesObject[heroName].manaPoints -= neededMP;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObject[heroName].manaPoints} MP!`);
        }
    }

    function TakeDamage(heroName, damage, attackerName) {

        damage = Number(damage);
        heroesObject[heroName].hitPoints -= damage;

        if (heroesObject[heroName].hitPoints > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attackerName} and now has ${heroesObject[heroName].hitPoints} HP left!`);

        } else {
            delete heroesObject[heroName];
            console.log(`${heroName} has been killed by ${attackerName}!`);
        }
    }

    function Recharge(heroName, rechargeMP) {

        rechargeMP = Number(rechargeMP);
        let currentMP = heroesObject[heroName].manaPoints;
        let updatedMP = 0;

        if ((currentMP + rechargeMP) > maxMP) {
            updatedMP = maxMP - heroesObject[heroName].manaPoints;
            heroesObject[heroName].manaPoints = maxMP;

        } else {
            updatedMP = rechargeMP;
            heroesObject[heroName].manaPoints += updatedMP;
        }

        console.log(`${heroName} recharged for ${updatedMP} MP!`);
    }

    function Heal(heroName, healHP) {

        healHP = Number(healHP);
        let currentHP = heroesObject[heroName].hitPoints;
        let updatedHP = 0;

        if ((currentHP + healHP) > maxHP) {
            updatedHP = maxHP - heroesObject[heroName].hitPoints;
            heroesObject[heroName].hitPoints = maxHP;

        } else {
            updatedHP = healHP;
            heroesObject[heroName].hitPoints += updatedHP;
        }

        console.log(`${heroName} healed for ${updatedHP} HP!`);
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