function movies(movieArray) {

    let fullMovieArray = [];

    movieArray.forEach(element => {

        if (element.includes('addMovie')) {

            let movieNameArray = element.split('addMovie ');
            let movieName = movieNameArray[1];
            fullMovieArray.push({name : movieName});

        } else if (element.includes('directedBy')) {

            let directorArray = element.split(' directedBy ');
            let movieName = directorArray[0];
            let directorName = directorArray[1];

            fullMovieArray.forEach(movie => {

                if (movie.name === movieName) {
                    movie.director = directorName;
                }
            });

        } else if (element.includes('onDate')) {

            let dateArray = element.split(' onDate ');
            let movieName = dateArray[0];
            let movieDate = dateArray[1];

            fullMovieArray.forEach(movie => {

                if (movie.name === movieName) {
                    movie.date = movieDate;
                }
            });
        }
    });

    for (let element of fullMovieArray) {

        if (Object.keys(element).length === 3) {
            console.log(JSON.stringify(element));
        }
    }
}

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);