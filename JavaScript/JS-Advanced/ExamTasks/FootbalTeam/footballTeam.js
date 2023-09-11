class footballTeam {
 
    constructor(clubName, country) {
 
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
 
    newAdditions(footballPlayers) {
 
        let currentInvitedPlayers = [];
 
        for (let player of footballPlayers) {
 
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
 
            let findedPlayer = this.invitedPlayers.find((el) => el.name == name);
 
            if (!findedPlayer) {
 
                this.invitedPlayers.push({ name, age, playerValue });
                currentInvitedPlayers.push(name);
 
            } else {
 
                if (findedPlayer.playerValue < playerValue) {
 
                    findedPlayer.playerValue = playerValue;
                }
            }
        }
 
        return `You successfully invite ${currentInvitedPlayers.join(', ')}.`;
    }
 
    signContract(selectedPlayer) {
 
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
 
        let currentPlayer = this.invitedPlayers.find((el) => el.name == name);
 
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
 
        if (currentPlayer.playerValue > playerOffer) {
 
            let difference = currentPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`);
        }
 
        currentPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
 
    ageLimit(name, age) {
 
        let currentPlayer = this.invitedPlayers.find((el) => el.name == name);
 
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
 
        if (currentPlayer.age < age) {
 
            let difference = age - currentPlayer.age;
 
            if (difference < 5) {
 
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
 
            } else {
 
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
 
        } else {
 
            return `${name} is above age limit!`;
        }
    }
 
    transferWindowResult() {
 
        let result = ['Players list:'];
 
        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
 
        sortedPlayers.forEach((player) => result.push(`Player ${player.name}-${player.playerValue}`));
 
        return result.join('\n');
    }
}
 
// input 1
 
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
 
// input 2
 
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));
 
// input 3
 
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
 
// input 4
 
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());