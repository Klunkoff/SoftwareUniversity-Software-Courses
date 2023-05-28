function destinationMapper(string) {

    let pattern = /([=|/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;
    let travelArray = [];
    let validPattern = undefined;

    while ((validPattern = pattern.exec(string)) !== null) {

        let destination = validPattern.groups['destination'];
        travelArray.push(destination);
        travelPoints += destination.length;
    }

    console.log(`Destinations: ${travelArray.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");