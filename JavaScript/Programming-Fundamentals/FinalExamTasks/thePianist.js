function thePianist(musicArray) {
 
    let collectionNumber = Number(musicArray.shift());
    let collectionObject = {};
 
    for (let i = 0; i < collectionNumber; i++) {
        let [currentPiece, currentComposer, currentKey] = musicArray.shift().split('|');
        collectionObject[currentPiece] = { composer: currentComposer, key: currentKey };
    }
 
    let command = musicArray.shift();
 
    while (command !== 'Stop') {
 
        let [currentCommand, currentPiece, currentComposer, currentKey] = command.split('|');
 
        switch (currentCommand) {
 
            case 'Add':
 
                if (!collectionObject.hasOwnProperty(currentPiece)) {
                    collectionObject[currentPiece] = { composer: currentComposer, key: currentKey };
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
 
                } else {
                    console.log(`${currentPiece} is already in the collection!`);
                }
 
                break;
 
            case 'Remove':
 
                if (collectionObject.hasOwnProperty(currentPiece)) {
                    delete collectionObject[currentPiece];
                    console.log(`Successfully removed ${currentPiece}!`);
 
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                }
 
                break;
 
            case 'ChangeKey':
 
                if (collectionObject.hasOwnProperty(currentPiece)) {
                    currentKey = currentComposer;
                    collectionObject[currentPiece].key = currentKey;
                    console.log(`Changed the key of ${currentPiece} to ${currentKey}!`);
 
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
                }
 
                break;
        }
 
        command = musicArray.shift();
    }
 
    for (let key in collectionObject) {
        console.log(`${key} -> Composer: ${collectionObject[key].composer}, Key: ${collectionObject[key].key}`);
    }
}
 
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);