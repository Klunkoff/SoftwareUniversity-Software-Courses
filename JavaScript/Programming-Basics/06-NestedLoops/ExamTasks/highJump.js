function solve(input) {

    let index = 0;
    let target = Number(input[index]);
    index++;

    let allJumpNumber = 0;
    let lastBar = 0;
    let isBadJump = false;

    for (let bar = target - 30; bar <= target; bar += 5) {

        let jumpHeight = Number(input[index]);
        index++;
        allJumpNumber++;

        if (jumpHeight > bar) {

            lastBar = bar;
            continue;

        } else {

            for (let j = 1; bar >= jumpHeight; j++) {

                if (j >= 3) {

                    isBadJump = true;
                    break;
                }

                lastBar = bar;
                jumpHeight = Number(input[index]);
                index++;
                allJumpNumber++;
            }
        }

        if (isBadJump) {
            break;
        }
    }

    if (isBadJump) {

        console.log(`Tihomir failed at ${lastBar}cm after ${allJumpNumber} jumps.`);

    } else {

        console.log(`Tihomir succeeded, he jumped over ${lastBar}cm after ${allJumpNumber} jumps.`);
    }
}

// solve(["231","205","212","213","228","229","230","235"]);
solve(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
