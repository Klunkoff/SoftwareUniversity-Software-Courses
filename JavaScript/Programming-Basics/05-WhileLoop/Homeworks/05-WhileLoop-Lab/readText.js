function solve(input) {

    let index = 0;
    let entryData = input[index];
    index++;

    while (entryData !== 'Stop') {

        console.log(entryData);
        entryData = input[index];
        index++;
    }
}

// solve(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);
solve(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);