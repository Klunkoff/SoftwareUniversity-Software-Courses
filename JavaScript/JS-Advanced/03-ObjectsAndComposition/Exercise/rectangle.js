function rectangle(width, height, color) {
 
    let colorFirstChar = color[0].toUpperCase();
    let colorString = color.substring(1);
    color = colorFirstChar + colorString;
 
    rectangleObject = {
 
        width,
        height,
        color,
        calcArea() {
 
            return this.width * this.height;
        },
    }
 
    return rectangleObject;
}
 
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
