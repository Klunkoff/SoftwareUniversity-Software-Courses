function solution() {

    let text = '';

    function append(string) {
        text += string;
    }

    function removeStart(integer) {
        text = text.slice(integer);
    }

    function removeEnd(integer) {
        text = text.slice(0, -integer);
    }

    function print() {
        console.log(text);
    }

    return {

        append,
        removeStart,
        removeEnd,
        print,
    }
}

// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
