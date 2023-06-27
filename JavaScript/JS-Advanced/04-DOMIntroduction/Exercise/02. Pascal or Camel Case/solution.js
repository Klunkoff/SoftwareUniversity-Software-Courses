function solve() {

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let textArray = text.toLowerCase().split(' ');
  let index = undefined;

  if (convention == 'Camel Case') {

    index = 1;

  } else if (convention == 'Pascal Case') {

    index = 0;

  } else {

    result.textContent = 'Error!';
    return;
  }

  for (index; index < textArray.length; index++) {

    let currentWord = textArray[index];
    let currentFirstChar = textArray[index][0].toUpperCase();
    let restOfWord = currentWord.substring(1);
    let currentNewWord = currentFirstChar + restOfWord;
    textArray[index] = currentNewWord;
  }

  result.textContent = textArray.join('');
}