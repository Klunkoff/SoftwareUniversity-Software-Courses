function movies(movieArray) {
 
    for (let element of movieArray) {
 
        if (element.includes('addMovie')) {
 
            let movieObject = {
 
                name: null,
                director: null,
                date: null,
            };
 
            let addMovieArray = element.split('addMovie ');
            let currentMovie = addMovieArray[1];
            movieObject.name = currentMovie;
 
            for (let addElement of movieArray) {
 
                if (addElement.includes('directedBy')) {
 
                    let directedByArray = addElement.split(' directedBy ');
                    let movieName = directedByArray[0];
                    let directorName = directedByArray[1];
 
                    if (movieObject.name == movieName) {
                        movieObject.director = directorName;
                    }
 
                } else if (addElement.includes('onDate')) {
 
                    let onDateArray = addElement.split(' onDate ');
                    let movieName = onDateArray[0];
                    let movieDate = onDateArray[1];
 
                    if (movieObject.name == movieName) {
                        movieObject.date = movieDate;
                    }
                }
            }
 
            let valuesNum = Object.values(movieObject);
 
            if (!valuesNum.includes(null)) {
                console.log(JSON.stringify(movieObject));
            }
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