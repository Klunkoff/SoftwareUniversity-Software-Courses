function cats(array) {

    class Cat {

        constructor(name, age) {

            this.catName = name;
            this.catAge = age;
        }

        meow() {

            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    for (let element of array) {

        let elementArray = element.split(' ');
        let currentName = elementArray[0];
        let currentAge = elementArray[1];
        let currentCat = new Cat(currentName, currentAge);

        currentCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);