function netherRealms(demonsInput) {

    patternSplit = /[, ]+/g;
    patternName = /[^0-9+\-\*\.\/]/g;
    patternDigits = /[+|-]*\d*\.*?\d+/g;
    patternAlterDamage = /[*|\/]/g;

    let demonsObject = {};
    let demonsArray = demonsInput.shift().split(patternSplit);

    for (let demon of demonsArray) {

        let currentDemonHealth = 0;
        let currentDemonDamage = 0;
        let demonNameArray = demon.match(patternName);
        let demonDamageArray = demon.match(patternDigits);
        let demonAlterDamageArray = demon.match(patternAlterDamage);

        for (let char of demonNameArray) {

            let asciiNumber = char.charCodeAt(0);
            currentDemonHealth += asciiNumber;
        }

        if (demonDamageArray) {

            for (let digit of demonDamageArray) {

                digit = Number(digit);
                currentDemonDamage += digit;
            }
        }

        if (demonAlterDamageArray) {

            for (alter of demonAlterDamageArray) {

                switch (alter) {

                    case '*': currentDemonDamage *= 2; break;
                    case '/': currentDemonDamage /= 2; break;
                }
            }
        }

        demonsObject[demon] = {

            health: currentDemonHealth,
            damage: currentDemonDamage,
        };
    }

    let sortedKeys = Object.keys(demonsObject).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {

        console.log(`${key} - ${demonsObject[key].health} health, ${(demonsObject[key].damage).toFixed(2)} damage`);
    }
}

netherRealms([`M3ph-0.5s-0.5t0.0**   ,  m15*/c-5.0`]);
netherRealms([`M3ph-0.5s-0.5t0.0**   ,  m15*/c-5.0,   Mr+45-20sss0.0*  ,mmm20.2kd-5.0, gosH$oo,pes^()ho`]);
netherRealms([`M3ph1st0** , Azazel`]);
netherRealms([`Gos/ho`]);