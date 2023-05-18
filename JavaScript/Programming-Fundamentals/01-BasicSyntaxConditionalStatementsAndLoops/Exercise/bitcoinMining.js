function bitcoinMining(input) {
 
    let dayCount = 0;
    let bitcoin = 0;
    let goldExchange = 0;
    let firstPurchasedDay = 0;
    let isFirsBitcoinPurchased = false;
 
    for (let i = 0; i < input.length; i++) {
 
        let countGold = input[i];
        dayCount++;
 
        if (dayCount % 3 === 0) {
 
            countGold *= 0.70;
        }
 
        goldExchange += countGold * 67.51;
 
        if (goldExchange >= 11949.16) {
 
            let BitcoinExchange = goldExchange / 11949.16;
            let BitcoinCount = Math.trunc(BitcoinExchange);
            bitcoin += BitcoinCount;
            let bitcoinPrice = BitcoinCount * 11949.16;
            goldExchange -= bitcoinPrice;
 
            if (bitcoin > 0 && !isFirsBitcoinPurchased) {
 
                firstPurchasedDay = dayCount;
                isFirsBitcoinPurchased = true;
            }
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoin}`);
 
    if (bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchasedDay}`);
    }
 
    console.log(`Left money: ${goldExchange.toFixed(2)} lv.`);
}
 
// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);