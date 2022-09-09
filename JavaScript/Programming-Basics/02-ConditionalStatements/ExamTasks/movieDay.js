function solve(input) {

    let movieTime = Number(input[0]);
    let sceneNumber = Number(input[1]);
    let oneSceneTime = Number(input[2]);

    let fieldPrep = movieTime * 0.15;
    let TotalSceneTime = sceneNumber * oneSceneTime;
    let sceneDay = fieldPrep + TotalSceneTime;

    if (movieTime >= sceneDay) {

        let result = movieTime - sceneDay;
        console.log(`You managed to finish the movie on time! You have ${result.toFixed(0)} minutes left!`);

    } else {

        let result = sceneDay - movieTime;
        console.log(`Time is up! To complete the movie you need ${result.toFixed(0)} minutes.`);
    }
}

solve(['120', '10', '11']);
solve(['60', '15', '3']);