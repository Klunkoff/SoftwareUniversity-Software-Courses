function solve(input) {

  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let puzzleCountSum = puzzleCount * 2.6;
  let dollCountSum = dollCount * 3;
  let bearCountSum = bearCount * 4.1;
  let minionsCountSum = minionsCount * 8.2;
  let truckCountSum = truckCount * 2;

  let totalToysSum = puzzleCountSum + dollCountSum + bearCountSum + minionsCountSum + truckCountSum;
  let totalSumAfterFees = totalToysSum - (totalToysSum * (10 / 100));
  let totalToys = puzzleCount + dollCount + bearCount + minionsCount + truckCount;

  if (totalToys >= 50) {

    totalSumAfterFees = totalSumAfterFees - (totalSumAfterFees * (25 / 100));
  }

  if (tripPrice <= totalSumAfterFees) {

    let result = (totalSumAfterFees - tripPrice).toFixed(2);

    console.log(`Yes! ${result} lv left.`);

  } else if (tripPrice > totalSumAfterFees) {

    let result = (tripPrice - totalSumAfterFees).toFixed(2);

    console.log(`Not enough money! ${result} lv needed.`);
  }
}

solve(["320", "8", "2", "5", "5", "1"]);
solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["200", "20", "25", "30", "50", "10"]);
solve(["100", "8", "2", "5", "5", "1"]);