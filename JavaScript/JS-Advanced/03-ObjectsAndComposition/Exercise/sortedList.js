function createSortedList() {

    let sortedList = {

        sortedArray: [],
        size: 0,

        add(element) {

            this.sortedArray.push(element);
            this.sortedArray = this.sortedArray.sort((a, b) => a - b);
            this.size++;
        },

        remove(index) {

            if (index >= 0 && index < this.sortedArray.length) {
                this.sortedArray.splice(index, 1);
                this.size--;
            }
        },

        get(index) {

            if (index >= 0 && index < this.sortedArray.length) {
                return this.sortedArray[index];
            }
        },
    };

    return sortedList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


