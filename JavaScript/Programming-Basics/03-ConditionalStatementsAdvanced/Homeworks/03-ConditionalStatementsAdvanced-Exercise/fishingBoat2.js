function solve(input) {

  let budget = Number(input[0]);
  let season = input[1];
  let fishermens = Number(input[2]);

  let shipRent = 0;

  switch (season) {
    case "Spring":
      shipRent = 3000;

      if (fishermens <= 6) {
        shipRent = shipRent - shipRent * 0.1;
      } else if (fishermens >= 7 && fishermens <= 11) {
        shipRent = shipRent - shipRent * 0.15;
      } else {
        shipRent = shipRent - shipRent * 0.25;
      }
      break;

    case "Summer":
    case "Autumn":
      shipRent = 4200;

      if (fishermens <= 6) {
        shipRent = shipRent - shipRent * 0.1;
      } else if (fishermens >= 7 && fishermens <= 11) {
        shipRent = shipRent - shipRent * 0.15;
      } else {
        shipRent = shipRent - shipRent * 0.25;
      }
      break;

    case "Winter":
      shipRent = 2600;

      if (fishermens <= 6) {
        shipRent = shipRent - shipRent * 0.1;
      } else if (fishermens >= 7 && fishermens <= 11) {
        shipRent = shipRent - shipRent * 0.15;
      } else {
        shipRent = shipRent - shipRent * 0.25;
      }
      break;
  }

  if (fishermens % 2 === 0 && season !== 'Autumn'){
    shipRent = shipRent - (shipRent * 0.05)
  }

  if (shipRent <= budget) {
    let result = budget - shipRent;
    console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
  } else {
    let result = shipRent - budget;
    console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);
  }
}

solve(["2000", "Winter", "13"]);
