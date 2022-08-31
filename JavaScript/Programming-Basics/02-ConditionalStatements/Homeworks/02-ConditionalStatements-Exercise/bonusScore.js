function solve(input) {
  let scores = Number(input[0]);
  let bonusScores = 0.0;

  if (scores <= 100) {
    bonusScores = 5;
  } else if ((scores > 100 && scores < 1000)) {
    bonusScores = scores * (20 / 100);
  } else if (scores > 1000) {
    bonusScores = scores * (10 / 100);
  }

  if (scores % 2 === 0) {
    bonusScores += 1;       // += добавя стойност към променливата
  } else if (scores % 10 === 5) {
    bonusScores += 2;       // += добавя стойност към променливата
  }

  console.log(bonusScores);
  console.log(scores + bonusScores);
}

solve(["900"]);
