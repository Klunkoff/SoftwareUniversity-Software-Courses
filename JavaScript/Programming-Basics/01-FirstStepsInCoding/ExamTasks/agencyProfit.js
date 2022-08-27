function solve(input){

    let companyName = input[0];
    let numberOfticketsAdult = Number(input[1]);
    let numberOfticketsChild = Number(input[2]);
    let ticketPriceAdult = Number(input[3]);
    let serviceFeePrice = Number(input[4]); 

    let ticketPriceChild = ticketPriceAdult - (ticketPriceAdult * 0.7);
   
    let totalFeeValue = (numberOfticketsAdult + numberOfticketsChild) * serviceFeePrice;
    let totalTicketAdult = numberOfticketsAdult * ticketPriceAdult;
    let totalTicketChild = numberOfticketsChild * ticketPriceChild;

    let totalValue = totalFeeValue + totalTicketAdult + totalTicketChild;

    let companyProfit = totalValue * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${companyProfit.toFixed(2)} lv.`);

}

solve(["WizzAir","15","5","120","40"]);
solve(["Ryanair","60","23","158.96","39.12"]);