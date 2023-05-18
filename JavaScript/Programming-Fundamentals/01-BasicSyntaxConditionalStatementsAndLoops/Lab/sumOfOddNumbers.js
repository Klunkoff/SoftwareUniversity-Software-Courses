function solve(num) {

    let sum = 0;
    let z = 1;

    for (let i = 1; i <= num; i++) {

        console.log(z);

        sum += z;
        z += 2;
    }

    console.log(`Sum: ${sum}`);
}

// solve(5);
solve(3);