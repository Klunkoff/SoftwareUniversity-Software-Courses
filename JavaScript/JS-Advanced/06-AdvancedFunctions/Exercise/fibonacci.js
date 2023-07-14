function getFibonator() {

  let array = [0, 1];
  let counter = 0;

  let result = () => {

    if (counter == 0) {
      counter++;
      return 1;
    }

    let currentNum = 0;
    array.forEach((el) => currentNum += el);
    array.push(currentNum);
    array.shift();

    return currentNum;
  }

  return result;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13