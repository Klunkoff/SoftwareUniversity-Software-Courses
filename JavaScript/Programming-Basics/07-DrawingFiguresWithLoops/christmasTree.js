function solve(number) {

    let isTopReady = false;

    for (let i = number; i > 0; i--) {

        if (isTopReady) {

            break;
        }

        let starTop = '';

        for (let j = 0; j < i; j++) {

            starTop += ' ';
        }

        for (let k = i; k <= number; k++) {

            starTop += ' |';
            isTopReady = true;
            console.log(starTop);

            break;
        }
    }

    for (let i = number; i > 0; i--) {

        let treeBranches = '';

        for (let j = 1; j < i; j++) {

            treeBranches += ' ';
        }

        for (let k = i; k <= number; k++) {

            treeBranches += '*';
        }

        treeBranches += ' | ';

        for (let z = number; z >= i; z--) {
 
            treeBranches += '*';
        }

        console.log(treeBranches);
    }
}

solve(1);