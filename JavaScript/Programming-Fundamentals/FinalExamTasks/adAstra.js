function adAstra(textArray) {
    
    function findPattern(currentPattern, currentText) {
 
        let findedPattern = currentPattern.exec(currentText);
 
        while (findedPattern !== null) {
 
            let currentName = findedPattern.groups['name'];
            let currentDate = findedPattern.groups['date'];
            let currentCalories = Number(findedPattern.groups['calories']);
 
            let currentObject = {
 
                item: currentName,
                date: currentDate,
                calories: currentCalories,
            };
 
            objectArray.push(currentObject);
            totalCalories += currentCalories;
            findedPattern = currentPattern.exec(currentText);
        }
    }
 
    let text = textArray.shift();
    let pattern = /([#|\|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let objectArray = [];
    let totalCalories = 0;
 
    findPattern(pattern, text);
 
    let totalDays = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${totalDays} days!`);
 
    for (let object of objectArray) {
 
        console.log(`Item: ${object.item}, Best before: ${object.date}, Nutrition: ${object.calories}`);
    }
}
 
// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);