function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
 
   function onClick() {
 
      let inputData = JSON.parse(document.querySelector('#inputs textarea').value);
 
      let restaurantsObject = {};
 
      for (let data of inputData) {
 
         let [restaurantName, workers] = data.split(' - ');
         let currentWorkersArray = workers.split(', ');
 
         if (!restaurantsObject.hasOwnProperty(restaurantName)) {
 
            restaurantsObject[restaurantName] = {
               bestSalary: 0,
               averageSalary: 0,
               allSalaries: 0,
               workers: [],
            }
         }
 
         for (let worker of currentWorkersArray) {
 
            let [name, salary] = worker.split(' ');
            salary = Number(salary);
            restaurantsObject[restaurantName].allSalaries += salary;
 
            let currentData = [name, salary];
            restaurantsObject[restaurantName].workers.push(currentData);
 
            if (restaurantsObject[restaurantName].bestSalary < salary) {
 
               restaurantsObject[restaurantName].bestSalary = salary;
            }
         }
 
         let divisor = restaurantsObject[restaurantName].workers.length;
         restaurantsObject[restaurantName].averageSalary = (restaurantsObject[restaurantName].allSalaries / divisor);
      }
 
      let sortedRestaurants = Object.entries(restaurantsObject).sort((a, b) => b[1].averageSalary - a[1].averageSalary);
      let bestRestaurant = sortedRestaurants[0];
      let bestRestaurantDisplay = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
      
      document.querySelector('#bestRestaurant p').textContent = bestRestaurantDisplay;
 
      let bestWorkers = bestRestaurant[1].workers;
      let sortedBestWorkers = bestWorkers.sort((a, b) => b[1] - a[1]);
 
      let workerResult = [];
 
      for (let worker of sortedBestWorkers) {
 
         let [name, salary] = [...worker];
         workerResult.push(`Name: ${name} With Salary: ${salary}`);
      }
 
      document.querySelector('#workers p').textContent = workerResult.join(' ');
   }
}