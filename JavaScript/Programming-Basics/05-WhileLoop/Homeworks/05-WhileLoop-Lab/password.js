function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let pass = input[index];
    index++;
    let passCount = input[index];
    index++;

    while (pass !== passCount) {

        passCount = input[index];
        index++;
    }

    console.log(`Welcome ${name}!`);
}

solve(["Nakov", "1234", "Pass", "1324", "1234"]);
solve(["Gosho", "secret", "secret"]);