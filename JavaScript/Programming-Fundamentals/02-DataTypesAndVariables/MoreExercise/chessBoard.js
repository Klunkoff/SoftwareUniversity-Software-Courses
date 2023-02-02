function chessBoard(number) {

    let result = ['<div class="chessboard">'];
    let colors = ['    <span class="black"></span>', '    <span class="white"></span>'];

    for (let i = 0; i < number; i++) {

        let innerDiv = ['  <div>'];

        for (let j = 1; j <= number; j++) {

            let currentColor = colors.shift();

            innerDiv.push(currentColor);

            if (j == number && number % 2 == 0) {

                colors.unshift(currentColor);

            } else {

                colors.push(currentColor);
            }
        }

        innerDiv.push('  </div>');

        result.push(innerDiv.join('\n'));
    }

    result.push('</div>');

    return result.join('\n');
}

console.log(chessBoard(3));
console.log(chessBoard(6));