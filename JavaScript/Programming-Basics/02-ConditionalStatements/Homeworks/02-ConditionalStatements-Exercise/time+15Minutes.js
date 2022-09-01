function solve(input) {

  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let minutes15 = minutes + 15;

  if (minutes15 >= 60) {

    hours += 1;
    minutes15 -= 60;
  }

  if (hours >= 24) {

    hours -= 24;
  }
  if (minutes15 < 10) {

    console.log(`${hours}:0${minutes15}`);

  } else {

    console.log(`${hours}:${minutes15}`);
  }
}

solve(["23", "45"]);
