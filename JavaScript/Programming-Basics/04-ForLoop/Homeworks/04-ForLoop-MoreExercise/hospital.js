function solve(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;

    let doctors = 7;
    let threatetPatients = 0;
    let unthreatedPatients = 0;

    for (let i = 1; i <= days; i++) {

        let countPatients = Number(input[index]);
        index++;

        if (i % 3 !== 0) {

            if (countPatients <= doctors) {
                threatetPatients += countPatients;
            } else {
                threatetPatients += doctors;
                unthreatedPatients += countPatients - doctors;
            }

        } else {

            if (unthreatedPatients > threatetPatients) {
                doctors++;
            }

            if (countPatients <= doctors) {
                threatetPatients += countPatients;
            } else {
                threatetPatients += doctors;
                unthreatedPatients += countPatients - doctors;
            }
        }
    }

    console.log(`Treated patients: ${threatetPatients}.`);
    console.log(`Untreated patients: ${unthreatedPatients}.`);
}

// solve(['4', '7', '27', '9', '1']);
// solve(['6', '25', '25', '25', '25', '25', '2']);
solve(['3', '7', '7', '7']);