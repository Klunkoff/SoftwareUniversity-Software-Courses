function rightPlace(string1, char, string2){

    let correctWord = string1.replace('_', char);

    let result = correctWord == string2 ? 'Matched' : 'Not Matched';
    
    console.log(result);
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');