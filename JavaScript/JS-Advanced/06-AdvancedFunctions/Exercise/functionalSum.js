function add(num) {

    let result = (x) => {

        num += x;
        return result;
    }

    result.toString = () => num;
    return result;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());