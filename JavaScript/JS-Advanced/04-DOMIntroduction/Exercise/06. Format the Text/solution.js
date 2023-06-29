function solve() {

  let textElement = document.getElementById('input').value;
  let outputDiv = document.querySelector('#output');
  let textElementArray = textElement.split('.').filter((x) => x.length > 1);

  while (textElementArray.length != 0) {

    let currentParagraph = [];

    for (let i = 0; i < 3; i++) {

      if (textElementArray.length == 0) {
        break;
      }

      let currentSentence = textElementArray.shift();
      currentParagraph.push(currentSentence);
    }

    let result = currentParagraph.join('. ');
    outputDiv.innerHTML += `<p>${result}.</p>`;
  }
}