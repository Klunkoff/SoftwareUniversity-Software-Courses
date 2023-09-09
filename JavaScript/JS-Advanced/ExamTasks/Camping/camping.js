class SummerCamp {
 
    constructor(organizer, location) {
 
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
 
            "child": 150,
            "student": 300,
            "collegian": 500,
        }
 
        this.listOfParticipants = [];
    }
 
    registerParticipant(name, condition, money) {
 
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
 
        let findParticipant = this.listOfParticipants.find((person) => person.name == name);
 
        if (findParticipant) {
            return `The ${name} is already registered at the camp.`;
        }
 
        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }
 
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
 
        return `The ${name} was successfully registered.`;
    }
 
    unregisterParticipant(name) {
 
        let findedPerson = this.listOfParticipants.find((person) => person.name == name);
 
        if (!findedPerson) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
 
        let findedPersonIndex = this.listOfParticipants.indexOf(findedPerson);
        this.listOfParticipants.splice(findedPersonIndex, 1);
 
        return `The ${name} removed successfully.`;
    }
 
    timeToPlay(typeOfGame, participant1, participant2) {
 
        let findPerson1 = this.listOfParticipants.find((person) => person.name == participant1);
        let findPerson2 = this.listOfParticipants.find((person) => person.name == participant2);
 
        if (typeOfGame == 'WaterBalloonFights') {
 
            if (!findPerson1 || !findPerson2) {
                throw new Error('Invalid entered name/s.');
            }
 
            if (findPerson1.condition != findPerson2.condition) {
                throw new Error('Choose players with equal condition.');
            }
 
            if (findPerson1.power > findPerson2.power) {
 
                findPerson1.wins++;
                return `The ${findPerson1.name} is winner in the game ${typeOfGame}.`;
 
            } else if (findPerson2.power > findPerson1.power) {
 
                findPerson2.wins++;
                return `The ${findPerson2.name} is winner in the game ${typeOfGame}.`;
 
            } else {
 
                return 'There is no winner.';
            }
 
        } else if (typeOfGame == 'Battleship') {
 
            if (!findPerson1) {
                throw new Error('Invalid entered name/s.');
            }
 
            findPerson1.power += 20;
 
            return `The ${findPerson1.name} successfully completed the game ${typeOfGame}.`;
        }
    }
 
    toString() {
 
        let result = [];
 
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
 
        let sortedPersons = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sortedPersons.forEach((person) => result.push(`${person.name} - ${person.condition} - ${person.power} - ${person.wins}`));
 
        return result.join('\n');
    }
}
 
 
// input 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
 
// input 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
 
// input 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
 
// input 4
 
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
 
console.log(summerCamp.toString());