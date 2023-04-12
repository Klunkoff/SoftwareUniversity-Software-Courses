function arenaTier(battleArray) {
 
    let battlePool = {};
    let battleCommand = battleArray.shift();
 
    while (battleCommand !== 'Ave Cesar') {
 
        if (battleCommand.includes(' -> ')) {
 
            let [currentGladiator, currentTechnique, currentSkill] = battleCommand.split(' -> ');
            currentSkill = Number(currentSkill);
 
            if (!battlePool.hasOwnProperty(currentGladiator)) {
                battlePool[currentGladiator] = { [currentTechnique]: currentSkill };
 
            } else if (!battlePool[currentGladiator].hasOwnProperty(currentTechnique)) {
                battlePool[currentGladiator][currentTechnique] = currentSkill;
 
            } else {
                let oldValueSkill = battlePool[currentGladiator][currentTechnique];
 
                if (oldValueSkill < currentSkill) {
                    battlePool[currentGladiator][currentTechnique] = currentSkill;
                }
            }
 
        } else {

            let [firstBattleGladiator, secondBattleGladiator] = battleCommand.split(' vs ');
 
            if (battlePool.hasOwnProperty(firstBattleGladiator) && battlePool.hasOwnProperty(secondBattleGladiator)) {
 
                let firstGladiatorSkills = Object.keys(battlePool[firstBattleGladiator]);
                let secondGladiatorSkills = Object.keys(battlePool[secondBattleGladiator]);
                let isBeated = false;
 
                for (let firstGladiatorSkill of firstGladiatorSkills) {
 
                    if (isBeated) {
                        break;
                    }
 
                    for (let secondGladiatorSkill of secondGladiatorSkills) {
 
                        if (firstGladiatorSkill === secondGladiatorSkill) {
 
                            let skillValueFirstGladiator = battlePool[firstBattleGladiator][firstGladiatorSkill];
                            let skillValueSecondGladiator = battlePool[secondBattleGladiator][secondGladiatorSkill];
 
                            if (skillValueFirstGladiator > skillValueSecondGladiator) {
 
                                delete battlePool[secondBattleGladiator];
 
                                isBeated = true;
 
                                break;
 
                            } else if (skillValueSecondGladiator > skillValueFirstGladiator) {
                                delete battlePool[firstBattleGladiator];
 
                                isBeated = true;
 
                                break;
                            }
                        }
                    }
                }
            }
        }
 
        battleCommand = battleArray.shift();
    }
 
    let gladiatorsWithTotalSkills = {};
    let gladiatorsArray = Object.entries(battlePool);
 
    for (let gladiator of gladiatorsArray) {
 
        let totalCost = 0;
        let currentGladiator = gladiator[0];
        let techniqueAndSkillArray = Object.entries(gladiator[1]);
 
        for (let techniqueAndSkill of techniqueAndSkillArray) {
            totalCost += techniqueAndSkill[1];
        }
 
        gladiatorsWithTotalSkills[currentGladiator] = totalCost;
    }
 
    let sortedGladiators = Object.entries(gladiatorsWithTotalSkills).sort((a, b) => {
 
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
 
    for (let gladiator of sortedGladiators) {
 
        let currentGladiator = gladiator[0];
        let gladiatorTotalCost = gladiator[1];
 
        console.log(`${currentGladiator}: ${gladiatorTotalCost} skill`);
 
        let sortedTechniques = Object.entries(battlePool[currentGladiator]).sort((a, b) => {
 
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });
 
        for (let technique of sortedTechniques) {
            console.log(`- ${technique[0]} <!> ${technique[1]}`);
        }
    }
}
 
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar',
]);
// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);