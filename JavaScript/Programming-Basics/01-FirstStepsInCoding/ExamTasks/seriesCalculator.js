function solve(input) {

    let serialName = input[0];
    let seasonNumber = Number(input[1]);
    let episodeNumber = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let episodeDurationWithReclams = episodeDuration + (episodeDuration * 0.2);
    let specialEpisodeDuration = seasonNumber * 10;
    let totalEpisodesDurtation = seasonNumber * episodeNumber * episodeDurationWithReclams + specialEpisodeDuration;
    let result = Math.floor(totalEpisodesDurtation);

    console.log(`Total time needed to watch the ${serialName} series is ${result} minutes.`);

}

solve(["Lucifer", "3", "18", "55"]);
solve(["Game of Thrones", "7", "10", "50"]);
solve(["Riverdale", "3", "21", "45"]);