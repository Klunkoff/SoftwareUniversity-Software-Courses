function solve(input) {

    let serialName = (input[0]);
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * 0.125;
    let relaxTime = breakDuration * 0.25;

    let restBreakTime = breakDuration - (lunchTime + relaxTime);

    if (restBreakTime >= episodeDuration) {

        let result = Math.ceil(restBreakTime - episodeDuration);
        console.log(`You have enough time to watch ${serialName} and left with ${result} minutes free time.`)
    } else {
        let result = Math.ceil(episodeDuration - restBreakTime);
        console.log(`You don't have enough time to watch ${serialName}, you need ${result} more minutes.`)
    }
}

solve(['Game of Thrones', '60', '96']);
solve(['Teen Wolf', '48', '60']);