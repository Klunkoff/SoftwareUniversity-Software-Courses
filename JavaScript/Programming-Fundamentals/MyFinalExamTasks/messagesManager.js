function messagesManager(inputData) {
 
    let allMessagesObject = {};
    let counter = 0;
 
    let capacity = Number(inputData.shift())
 
    for (let i = 0; i < inputData.length; i++) {
        
        let currentDataArray = inputData[i].split('=');
        let currentCommand = currentDataArray[0];
 
        if (currentCommand === "Statistics") {

            break;
        }
 
        if (currentCommand === "Add") {
 
            let userName = currentDataArray[1];
            let send = Number(currentDataArray[2]);
            let received = Number(currentDataArray[3]);
 
            if (!allMessagesObject.hasOwnProperty(userName)){


                allMessagesObject[userName] = []; 
                allMessagesObject[userName].push(send);
                allMessagesObject[userName].push(received);
            } 
        }
 

        if (currentCommand === "Message"){
 

            let sender = currentDataArray[1];
            let receiver = currentDataArray[2];
 
            // check for problems //

            if (allMessagesObject.hasOwnProperty(sender) && allMessagesObject.hasOwnProperty(receiver)){

                
                allMessagesObject[sender][0] += 1;
                allMessagesObject[receiver][1] += 1;
 
                let totalSenderMessages = allMessagesObject[sender][0] + allMessagesObject[sender][1];
                let totalReceiverMessages = allMessagesObject[receiver][0] + allMessagesObject[receiver][1];;
 
                if (totalSenderMessages >= capacity) {

                    console.log(`${sender} reached the capacity!`)
                    delete allMessagesObject[sender];
                }
 
                if (totalReceiverMessages >= capacity) {

                    console.log(`${receiver} reached the capacity!`)
                    delete allMessagesObject[receiver];
                }

            }

        }
 
        if (currentCommand === "Empty") {

            let userName = currentDataArray[1];
 
            if (allMessagesObject.hasOwnProperty(userName)) {

                delete allMessagesObject[userName];

            } else if (userName === 'All') {

                allMessagesObject = {};
            }

        }
    }
 
    for (let key in allMessagesObject) {

        counter++;
    }
 
    console.log(`Users count: ${counter}`);
 
    for (let [key,value] of Object.entries(allMessagesObject)) {

        console.log(`${key} - ${Number(value[0]) + Number(value[1])}`);
    } 
}
 
// messagesManager([
// "10",
// "Add=Berg=9=0",
// "Add=Kevin=0=0",
// "Message=Berg=Kevin",
// "Add=Mark=5=4",
// "Statistics"]);
messagesManager(([
"20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]));
 
// messagesManager(([
//     "12",
//     "Add=Bonnie=3=5",
//     "Add=Johny=4=4",
//     "Empty=All",
//     "Add=Bonnie=3=3",
//     "Statistics"]));