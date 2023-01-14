function triangleOfnumbers(num) {

    for (let i = 1; i <= num; i++) {

        let buff = '';

        for (let j = 1; j <= i; j++) {

            buff += `${i} `;
        }

        console.log(buff);
    }
}

// triangleOfnumbers(3);
// triangleOfnumbers(5);
triangleOfnumbers(6);