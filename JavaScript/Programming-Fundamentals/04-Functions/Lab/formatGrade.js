function formatGrade(grade) {
 
    let description = '';
    let result = grade.toFixed(2);
 
    if (grade < 3) {
        description = 'Fail';
        result = 2;
 
    } else if (grade < 3.50) {
        description = 'Poor';
 
    } else if (grade < 4.50) {
        description = 'Good';
 
    } else if (grade < 5.50) {
        description = 'Very good';
 
    } else {
        description = 'Excellent';
    }
 
    console.log(`${description} (${result})`);
}
 
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);
formatGrade(5.6);