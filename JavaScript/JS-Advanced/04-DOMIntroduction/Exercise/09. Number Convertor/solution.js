function solve() {

    let toSelectElement = document.querySelector('#selectMenuTo option');
    toSelectElement.value = 'binary';
    toSelectElement.textContent = 'Binary';

    let newOptionElement = document.createElement('option');
    newOptionElement.value = 'hexadecimal';
    newOptionElement.textContent = 'Hexadecimal';

    toSelectElement.parentElement.appendChild(newOptionElement);

    let inputNumber = document.getElementById('input');

    let convertItButton = document.querySelector('button');
    convertItButton.addEventListener('click', convert);

    function convert() {

        let selectedOption = document.querySelector('#selectMenuTo');
        let resultOutput = document.querySelector('#result');

        if (selectedOption.value == 'binary') {

            let decimalNum = Number(inputNumber.value);
            let binaryNum = decimalNum.toString(2);
            resultOutput.value = binaryNum;

        } else if (selectedOption.value == 'hexadecimal') {

            let decimalNum = Number(inputNumber.value);
            let hexadecimalNum = decimalNum.toString(16).toUpperCase();
            resultOutput.value = hexadecimalNum;
        }
    }
}