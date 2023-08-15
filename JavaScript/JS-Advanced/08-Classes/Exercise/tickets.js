function tickets(ticketArray, sortingCriteria) {
 
    arrayOfTicketObjects = [];
 
    class Ticket {
 
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
 
        static sortTickets(array, criteria) {
 
            let sortedResult;
 
            if (criteria == 'price') {
                sortedResult = array.sort((a, b) => a[criteria] - b[criteria]);
 
            } else {
                sortedResult = array.sort((a, b) => a[criteria].localeCompare(b[criteria]));
            }
 
            return sortedResult;
        }
    }
 
    for (let ticket of ticketArray) {
 
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
 
        let readyTicket = new Ticket(destination, price, status);
        arrayOfTicketObjects.push(readyTicket);
    }
 
    let result = Ticket.sortTickets(arrayOfTicketObjects, sortingCriteria);
 
    return result;
}
 
console.table(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
console.table(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));