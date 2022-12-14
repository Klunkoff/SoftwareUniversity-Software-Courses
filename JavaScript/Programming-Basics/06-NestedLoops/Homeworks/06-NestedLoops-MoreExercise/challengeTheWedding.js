function solve(input) {

    let males = Number(input[0]);
    let females = Number(input[1]);
    let tables = Number(input[2]);

    let countMeetings = 0;
    let isTablesOver = false;
    let buff = '';

    for (let i = 1; i <= males; i++) {

        if (isTablesOver) {
            break;
        }

        for (let j = 1; j <= females; j++) {

            countMeetings++;

            if (countMeetings > tables) {

                isTablesOver = true;
                break;

            } else {

                buff += `(${i} <-> ${j}) `;
            }
        }
    }

    console.log(buff);
}

// solve(['2', '2', '6']);
// solve(['2', '2', '3']);
solve(['5', '8', '40']);