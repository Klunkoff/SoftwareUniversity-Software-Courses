function bunnyKill(input) {

    const matrix = input
    .slice(0, -1)
    .map(row => row
        .split(' ')
        .map(Number));

    const bombs = input[input.length - 1]
    .split(' ')
    .map(coord => coord
        .split(',')
        .map(Number));

    let totalDamage = 0;
    let totalKills = 0;
  
    for (let i = 0; i < bombs.length; i++) {

      const [row, col] = bombs[i];
      const bombDamage = matrix[row][col];
  
      if (bombDamage > 0) {

        totalDamage += bombDamage;
        totalKills++;
  
        matrix[row][col] = 0;
  
        for (let r = Math.max(0, row - 1); r <= Math.min(matrix.length - 1, row + 1); r++) {

          for (let c = Math.max(0, col - 1); c <= Math.min(matrix[0].length - 1, col + 1); c++) {

            matrix[r][c] -= bombDamage;
          }
        }
      }
    }
  
    for (let r = 0; r < matrix.length; r++) {

      for (let c = 0; c < matrix[0].length; c++) {

        if (matrix[r][c] > 0) {
            
          totalDamage += matrix[r][c];
          totalKills++;
        }
      }
    }
  
    console.log(totalDamage);
    console.log(totalKills);
  }

  bunnyKill(['10 10 10',
  '10 10 10', 
  '10 10 10',
  '0,0']);

  bunnyKill(['5 10 15 20',
  '10 10 10 10',
  '10 15 10 10',
  '10 10 10 10',
  '2,2 0,1']);

