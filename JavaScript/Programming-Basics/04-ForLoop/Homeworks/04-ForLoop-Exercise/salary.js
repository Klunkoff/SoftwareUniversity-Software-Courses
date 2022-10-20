function solve(input) {

    let index = 2;

    let tabNum = Number(input[0]);
    let salary = Number(input[1]);
    let website = (input[index]);

    for (let i = 1; i <= tabNum; i++) {

        website = (input[index]);
        index++;

        switch (website) {

            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
        }

        if (salary <= 0) {

            console.log(`You have lost your salary.`); break;
        }
    }

    if (salary > 0) {

        console.log(salary);
    }
}

//solve(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);
//solve(["3","500","Github.com","Stackoverflow.com","softuni.bg"]);
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);