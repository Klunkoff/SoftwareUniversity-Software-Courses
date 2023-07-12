function filterEmployees(data, criteria) {

    let objectArray = JSON.parse(data);

    if (criteria == 'all') {

        objectArray.forEach((el, index) => {
            console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`);
        });

    } else {

        let [keyCriteria, valueCriteria] = criteria.split('-');
        let filteredObjectArray = objectArray.filter((el) => el[keyCriteria] == valueCriteria);

        filteredObjectArray.forEach((el, index) => {
            console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`);
        });
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');