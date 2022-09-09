function solve(input) {

  let budget = Number(input[0]);
  let numberOfNights = Number(input[1]);
  let oneNightPrice = Number(input[2]);
  let additionalCostsInPercents = Number(input[3]);

  let nightsCost = numberOfNights * oneNightPrice;
  let additionalCostsValue = budget * (additionalCostsInPercents / 100);

  if (numberOfNights > 7) {
    
    nightsCost = nightsCost - nightsCost * 0.05;
  }

  let overall = additionalCostsValue + nightsCost;

  if (overall <= budget) {

    let result = budget - overall;
    console.log(`Ivanovi will be left with ${result.toFixed(2)} leva after vacation.`);

  } else {

    result = overall - budget;
    console.log(`${result.toFixed(2)} leva needed.`);
  }
}

solve(["800.50", "8", "100", "2"]);
solve(["500", "7", "66", "15"]);
