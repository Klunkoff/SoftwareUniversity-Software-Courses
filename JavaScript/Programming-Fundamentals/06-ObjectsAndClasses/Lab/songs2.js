function songs(arrayOfSongs) {

    let songsNumber = arrayOfSongs.shift();
    let typeList = arrayOfSongs.pop();

    class Songs {

        constructor(typeList, name, time) {

            this.album = typeList;
            this.songName = name;
            this.songTime = time;
        }

        printSong() {

            console.log(this.songName);
        }
    }

    for (let i = 0; i < songsNumber; i++) {

        let elementArray = arrayOfSongs[i].split('_');
        let currentAlbum = elementArray[0];
        let currentSong = elementArray[1];
        let currentTime = elementArray[2];
        let currentStatus = new Songs(currentAlbum, currentSong, currentTime);

        if (typeList == currentAlbum) {
            currentStatus.printSong();

        } else if (typeList == 'all') {
            currentStatus.printSong();
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);
// songs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']);