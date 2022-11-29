function solve(input) {

    let index = 0;
    let hallCapacity = Number(input[index]);
    index++;

    let ticketSum = 0;
    let peopleCount = 0;

    for (let i = 1; i < input.length; i++) {

        peopleCount = input[index];
        index++;

        let counterticketSum = peopleCount * 5;

        if (counterticketSum % 3 === 0) {

            counterticketSum -= 5;
        }

        if (peopleCount === 'Movie time!') {

            console.log(`There are ${hallCapacity} seats left in the cinema.`);

            break;
        }

        hallCapacity -= peopleCount;

        if (hallCapacity < 0) {

            console.log(`The cinema is full.`);

            break;
        }

        ticketSum += counterticketSum;
    }

    console.log(`Cinema income - ${ticketSum} lv.`);
}

//solve(["60","10","6","3","20","15","Movie time!"]);
//solve(["50","15","10","10","15","5"]);
solve(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);