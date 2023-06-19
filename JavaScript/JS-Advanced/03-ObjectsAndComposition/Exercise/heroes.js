function solve() {
 
    let heroesObject = {
 
        mage (name) {
 
            let mageData = {
 
                name : name,
                mana : 100,
                health : 100,
 
                cast(spell) {
    
                    this.mana = this.mana - 1;
                    console.log(`${this.name} cast ${spell}`);
                },
            };
            
            return mageData;
        },
 
        fighter(name) {
 
            let fighterData = {
 
                name : name,
                stamina : 100,
                health : 100,
 
                fight() {
    
                    this.stamina = this.stamina - 1;
                    console.log(`${this.name} slashes at the foe!`);
                },
            };
            
            return fighterData;
        },
    };
 
    return heroesObject;
}
 
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
 
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
 
console.log(scorcher2.stamina);
console.log(scorcher.mana);