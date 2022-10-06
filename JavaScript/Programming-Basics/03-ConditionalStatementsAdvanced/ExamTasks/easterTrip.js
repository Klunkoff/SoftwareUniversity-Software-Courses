function solve(input){

    let destination = input[0];
    let date = input[1];
    let nightsNumber = Number(input[2]);

    let price = 0;

    if (destination === 'France'){

        switch(date){

            case '21-23' : price = nightsNumber * 30; break;
            case '24-27' : price = nightsNumber * 35; break;
            case '28-31' : price = nightsNumber * 40; break;
        }
    } else if (destination === 'Italy'){
        
        switch(date){

            case '21-23' : price = nightsNumber * 28; break;
            case '24-27' : price = nightsNumber * 32; break;
            case '28-31' : price = nightsNumber * 39; break;
        }

    } else if (destination === 'Germany'){

        switch(date){

            case '21-23' : price = nightsNumber * 32; break;
            case '24-27' : price = nightsNumber * 37; break;
            case '28-31' : price = nightsNumber * 43; break;
     
       }
    
    }

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);

}

solve(['Germany', '24-27', '5']);
solve(['Italy', '21-23', '7']);
solve(['France', '28-31', '8']);