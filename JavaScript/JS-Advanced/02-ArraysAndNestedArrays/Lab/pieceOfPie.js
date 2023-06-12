function pieceOfPie(arrayOfPies, firstPie, secondPie) {
 
    let firstPieIndex = arrayOfPies.indexOf(firstPie);
    let secondPieIndex = arrayOfPies.indexOf(secondPie);
    let searchedPies = arrayOfPies.slice(firstPieIndex, secondPieIndex + 1);
 
    return searchedPies;
}
 
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');