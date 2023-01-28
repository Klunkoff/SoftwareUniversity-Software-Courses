function gladiatorExpenses(fights, helmet, sword, shield, armor) {
 
    let lostFights = fights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;
    let brokedShields = 0;
    let gladiatorExpenses = 0;
 
    for (let i = 1; i <= lostFights; i++) {
 
        if (i % 2 == 0) {
            gladiatorExpenses += helmetPrice;
        }
 
        if (i % 3 == 0) {
            gladiatorExpenses += swordPrice;
        }
 
        if (i % 2 == 0 && i % 3 == 0) {
            gladiatorExpenses += shieldPrice;
            brokedShields++;
 
            if (brokedShields % 2 == 0) {
                gladiatorExpenses += armorPrice;
            }
        }
    }
 
    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
}
 
gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);