function emailValidation(emailArray) {
 
    let pattern = /^\w+@[a-z]+\.[a-z]+/g;
 
    for (let email of emailArray) {
 
        if (pattern.test(email)) {
            console.log(email);
        }
    }
}
 
emailValidation(['valid123@email.bg', 'invalid*name@emai1.bg', 'validValid78@gmail.com', 'inval&d@gmail.com']);