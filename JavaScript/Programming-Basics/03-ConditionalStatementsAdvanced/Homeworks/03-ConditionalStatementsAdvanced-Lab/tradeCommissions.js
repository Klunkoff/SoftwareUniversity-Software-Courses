function solve(input) {

    let city = input[0];
    let money = Number(input[1]);

    let commision = 0;

    switch (city) {

        case "Sofia":
            if (money >= 0 && money <= 500) {
                commision = money * 0.05;
                console.log(commision.toFixed(2));
            } else if (money > 500 && money <= 1000) {
                commision = money * 0.07;
                console.log(commision.toFixed(2));
            } else if (money > 1000 && money <= 10000) {
                commision = money * 0.08;
                console.log(commision.toFixed(2));
            } else if (money > 10000) {
                commision = money * 0.12;
                console.log(commision.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Varna":

            if (money >= 0 && money <= 500) {
                commision = money * 0.045;
                console.log(commision.toFixed(2));
            } else if (money > 500 && money <= 1000) {
                commision = money * 0.075;
                console.log(commision.toFixed(2));
            } else if (money > 1000 && money <= 10000) {
                commision = money * 0.1;
                console.log(commision.toFixed(2));
            } else if (money > 10000) {
                commision = money * 0.13;
                console.log(commision.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Plovdiv":

            if (money >= 0 && money <= 500) {
                commision = money * 0.055;
                console.log(commision.toFixed(2));
            } else if (money > 500 && money <= 1000) {
                commision = money * 0.08;
                console.log(commision.toFixed(2));
            } else if (money > 1000 && money <= 10000) {
                commision = money * 0.12;
                console.log(commision.toFixed(2));
            } else if (money > 10000) {
                commision = money * 0.145;
                console.log(commision.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        default:
            console.log("error");
    }
}

solve(["Plovdiv", "-3874.50"]);
