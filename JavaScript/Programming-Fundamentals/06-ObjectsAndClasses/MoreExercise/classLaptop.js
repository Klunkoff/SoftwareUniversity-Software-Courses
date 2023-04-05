function classLaptop() {
 
    class Laptop {
 
        constructor(info, quality) {
 
            this.quality = quality;
            this.age = info.age;
            this.info = info;
            this.price = 800 - (this.age * 2) + (this.quality * 0.5);
        }
 
        isOn = false;
 
        turnOn() {
 
            this.isOn = true;
            this.quality--;
            this.price = 800 - (this.age * 2) + (this.quality * 0.5);
        }
 
        turnOff() {
 
            this.isOn = false;
            this.quality--;
            this.price = 800 - (this.age * 2) + (this.quality * 0.5);
        }
 
        showInfo() {
 
            let result = JSON.stringify(this.info);
            return result;
        }
    }
 
    let info = { producer: "Dell", age: 2, brand: "XPS" };
    let laptop = new Laptop(info, 10);
    laptop.turnOn();
    console.log(laptop.showInfo());
    laptop.turnOff();
    console.log(laptop.quality);
    laptop.turnOn();
    console.log(laptop.isOn);
    console.log(laptop.price);
 
    // let info = { producer: "Lenovo", age: 1, brand: "Legion" };
    // let laptop = new Laptop(info, 10);
    // laptop.turnOn();
    // console.log(laptop.showInfo());
    // laptop.turnOff();
    // laptop.turnOn();
    // laptop.turnOff();
    // console.log(laptop.isOn);
}
 
classLaptop();