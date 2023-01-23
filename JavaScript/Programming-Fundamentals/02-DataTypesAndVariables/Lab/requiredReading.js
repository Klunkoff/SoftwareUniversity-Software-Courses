function requiredReading(pageNumber, pagesReadFor1Hour, days) {

    let allHours = pageNumber / pagesReadFor1Hour;
    let result = allHours / days;

    console.log(result);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);