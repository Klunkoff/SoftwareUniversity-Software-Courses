class Triathlon {
 
    constructor(competitionName) {
 
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
 
    addParticipant(participantName, participantGender) {
 
        if (this.participants.hasOwnProperty(participantName)) {
 
            return `${participantName} has already been added to the list`;
        }
 
        this.participants[participantName] = participantGender;
 
        return `A new participant has been added - ${participantName}`;
    }
 
    completeness(participantName, condition) {
 
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
 
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
 
        let completedDisciplines = Math.trunc(condition / 30);
 
        if (completedDisciplines <= 2) {
 
            return `${participantName} could only complete ${completedDisciplines} of the disciplines`;
 
        } else {
 
            this.listOfFinalists.push({ participantName, participantGender: this.participants[participantName] });
            delete this.participants[participantName];
 
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }
 
    rewarding(participantName) {
 
        let findedCompetitor = this.listOfFinalists.find((player) => player.participantName == participantName);
 
        if (findedCompetitor) {
            return `${participantName} was rewarded with a trophy for his performance`;
 
        } else {
            return `${participantName} is not in the current finalists list`;
        }
    }
 
    showRecord(criteria) {
 
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        }
 
        if (criteria == 'all') {
 
            let result = [];
            result.push(`List of all ${this.competitionName} finalists:`);
 
            let sortedFinalists = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
            sortedFinalists.forEach((finalist) => result.push(`${finalist.participantName}`));
 
            return result.join('\n');
        }
 
        let finalistWithCriteria = this.listOfFinalists.find((finalist) => finalist.participantGender == criteria);
 
        if (finalistWithCriteria) {
            return `${finalistWithCriteria.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
 
        } else {
            return `There are no ${criteria}'s that finished the competition`;
        }
    }
}
 
// input 1
 
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));
 
// input 2
 
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));
 
// input 3
 
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
 
 
// input 4
 
// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));
 
// input 5
 
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));
 
// input 6
 
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));